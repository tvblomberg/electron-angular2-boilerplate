import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'test',
    templateUrl: 'test.component.html'
})
export class TestComponent implements OnInit {
    public test: string = "";
    public canadianSpeak: string = "";
    public gregs: any = [{
        food: "pizza"
    }, {
        food: "salad"
    }, {
        food: "cheese"
    }, {
        food: "gyros"
    }];

    constructor() { 

    }

    ngOnInit() { 

    }

    public isLink() {
        return this.test.toUpperCase() === "LINK";
    }
}