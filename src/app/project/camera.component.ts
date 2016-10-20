import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'camera',
    templateUrl: 'camera.component.html',
    styleUrls: ['camera.component.css']
})
export class CameraComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        let self = this;
        navigator.getUserMedia({ video: true },
            function (stream) {
                (<HTMLImageElement>document.getElementById('camera')).src = URL.createObjectURL(stream);
            },
            function () {
                alert('could not connect stream');
            });
    }
}

interface Navigator {
    getUserMedia(
        options: { video?: boolean; audio?: boolean; },
        success: (stream: any) => void,
        error?: (error: string) => void
    ): void;
}