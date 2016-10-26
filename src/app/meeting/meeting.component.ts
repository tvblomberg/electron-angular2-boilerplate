import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'meeting',
    templateUrl: 'meeting.component.html',
    styleUrls: ['meeting.component.css']
})
export class MeetingComponent implements OnInit {
    public topic: string;
    public length: number;
    public tangentNotes: any = [];
    public meetingNotes: any = [];
    public meetingNote: string = "";
    public tangentNote: string = "";
    constructor() { }

    ngOnInit() { 
    }

    public createTangentNote() {
        this.tangentNotes.push({
            topic: this.topic,
            note: this.tangentNote,
            date: new Date()
        });

        this.tangentNote = "";
    }

    public createMeetingNote() {
        this.meetingNotes.push({
            topic: this.topic,
            note: this.meetingNote,
            date: new Date()
        });

        this.meetingNote = "";
    }
}

/* We always do this */
enum Direction {
    Up,
    Down
}