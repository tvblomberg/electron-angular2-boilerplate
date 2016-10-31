import { Component, OnInit } from '@angular/core';
import { NotesService } from '../shared/services/notes.service';

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
    constructor(private notesService: NotesService) { }

    ngOnInit() { 
    }

    ngAfterViewInit() {
        const promise = this.notesService.getAllNotes();

        promise.then((res: any) => {
            this.meetingNotes = res.filter((note: any) => {
                return note.type === "MEETING";
            });

            this.tangentNotes = res.filter((note: any) => {
                return note.type === "TANGENT";
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    public createTangentNote() {
        const promise = this.notesService.insertNote(this.topic, this.tangentNote, "TANGENT");

        promise.then((res: any) => {
            this.tangentNotes = res.filter((note: any) => {
                return note.type === "TANGENT";
            });
        }).catch((err) => {
            console.log(err);
        });

        this.tangentNote = "";
    }

    public createMeetingNote() {
        const promise = this.notesService.insertNote(this.topic, this.meetingNote, "MEETING");

        promise.then((res: any) => {
            this.meetingNotes = res.filter((note: any) => {
                return note.type === "MEETING";
            });
        }).catch((err) => {
            console.log(err);
        });

        this.meetingNote = "";
    }
}

/* We always do this */
enum Direction {
    Up,
    Down
}