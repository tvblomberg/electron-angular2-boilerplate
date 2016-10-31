import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'break-out',
    template: `
    <div class="row">
        <div class="col-sm-12">
            <button (click)="startGame()" class="btn btn-primary pull-right">Start Game</button>
        </div>
    </div>
    <canvas id="myCanvas" width="480" height="320"></canvas>
    `
})
export class BreakOutComponent implements OnInit {
    private canvas: any;
    private ctx: any;
    private x: number;
    private y: number;
    private ballRadius: number;
    private paddleHeight: any = 10;
    private paddleWidth: any = 75;
    private paddleX: any;
    private rightPressed: boolean = false;
    private leftPressed: boolean = false;
    private dx: number = 2;
    private dy = -2;
    private gameInterval: any;
    constructor() { }

    ngOnInit() {

    }

    ngAfterViewInit() {
    }

    private startGame() {
        this.initializeGame();
        this.gameInterval = setInterval(() => this.draw(), 10);
    }

    private initializeGame() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width/2;
        this.y = this.canvas.height-30;
        this.ballRadius = 10;
        let paddleWidth = this.paddleWidth;
        this.paddleX = (this.canvas.width-paddleWidth)/2;

        document.addEventListener("keydown", () => this.keyDownPressed(event), false);
        document.addEventListener("keyup", () => this.keyUpPressed(event), false);
    }

    private draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let ballRadius = this.ballRadius;
        let paddleWidth = this.paddleWidth;
        this.drawBall();
        this.drawPaddle();

        if(this.x + this.dx > this.canvas.width-ballRadius || this.x + this.dx < ballRadius) {
            this.dx = -this.dx;
        }

        if(this.y + this.dy < ballRadius) {
            this.dy = -this.dy;
        } else if(this.y + this.dy > this.canvas.height-ballRadius) {
            if(this.x > this.paddleX && this.x < this.paddleX + paddleWidth) {
                this.dy = -this.dy;
            }
            else {
                alert("GAME OVER");
                clearInterval(this.gameInterval);
            }
        }

        if(this.rightPressed && this.paddleX < this.canvas.width-paddleWidth) {
            this.paddleX += 7;
        }
        else if(this.leftPressed && this.paddleX > 0) {
            this.paddleX -= 7;
        }
        this.x += this.dx;
        this.y += this.dy;
    }

    private drawBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    private drawPaddle() {
        this.ctx.beginPath();
        let paddleHeight = this.paddleHeight;
        let paddleWidth = this.paddleWidth;
        this.ctx.rect(this.paddleX, this.canvas.height-paddleHeight, paddleWidth, paddleHeight);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }

    private keyUpPressed(e: any) {
        if(e.keyCode == 39) {
            this.rightPressed = false;
        }
        else if(e.keyCode == 37) {
            this.leftPressed = false;
        }
    }

    private keyDownPressed(e: any) {
        if(e.keyCode == 39) {
            this.rightPressed = true;
        }
        else if(e.keyCode == 37) {
            this.leftPressed = true;
        }
    }

}