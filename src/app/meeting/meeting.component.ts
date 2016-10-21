import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'meeting',
    templateUrl: 'meeting.component.html',
    styleUrls: ['meeting.component.css']
})
export class MeetingComponent implements OnInit {
    public topic: string;
    public length: number;
    public tangents: any;
    public notes: any;
    constructor() { }

    ngOnInit() { 
    }
}

/* We always do this */
enum Direction {
    Up,
    Down
}