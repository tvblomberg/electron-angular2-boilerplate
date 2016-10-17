import { Component, OnInit } from '@angular/core';
declare var Notification: any;

@Component({
    selector: 'notification',
    templateUrl: 'examples-notifications.component.html'
})
export class NotificationsComponent implements OnInit {
    private title: string = "";
    private body: string = "";
    constructor() { }

    ngOnInit() { 
    }

    public createNotification() {
        let notification = new Notification(this.title, {
            body: this.body
        });
    }
}