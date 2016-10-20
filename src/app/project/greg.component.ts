import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'gregfoodandstuff',
    template: `Greg likes to eat {{greg.food}}`
})
export class GregComponent implements OnInit {
    @Input('greg') public greg: any;

    constructor() { }

    ngOnInit() { }

}