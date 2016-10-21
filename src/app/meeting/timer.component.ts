import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.css']
})
export class TimerComponent implements OnInit {
    @Input('minutes') minutes: string;
    @Input('seconds') seconds: string;
    @Input('directionS') directionS: string;
    @Input('clear') clear: boolean = false;
    @Input('subtitle') subTitle: string;

    @Output('done') done: boolean = false;

    public counter: number;
    private direction: Direction;
    private running: boolean = false;
    private initialized: boolean = false;
    constructor() { }

    ngOnInit() {
        this.direction = this.directionS === "Up" ? Direction.Up : Direction.Down;
        this.incr = this.direction === Direction.Up ? 1 : -1;
    }

    private begin: number;
    private limit: number;
    private incr: number;

    public toggle(): void {
        this.running = !this.running;
        
        if (!this.initialized) {
            this.initTimer();
        }

        const si = setInterval(() => {
            if (this.counter === this.limit || !this.running) {
                clearInterval(si);
                if (this.counter === this.limit) {
                    this.running = false;
                    this.counter = this.begin;
                }
            }
            if (this.running) {
                this.counter += this.incr;
            }

        }, 1000);
    }

    public initTimer() {
        this.begin = this.direction === Direction.Up ? 0 : this.getSeconds();
        this.limit = this.direction === Direction.Up ? this.getSeconds() : 0;
        this.counter = this.begin;
        this.initialized = true;
    }

    private getSeconds(): number {
        const secs = (parseInt(this.minutes) || 0) * 60 + (parseInt(this.seconds) || 0);

        return secs || 3600;
    }

    public pause(): void {

    }
}

enum Direction {
    Up,
    Down
}