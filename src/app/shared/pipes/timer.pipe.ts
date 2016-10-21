import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'timer'
})

export class TimerPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        if (value) {
            let timeInSecs = value;
            let minutes: any = Math.floor(timeInSecs / 60);
            let seconds: any = timeInSecs % 60;

            if (minutes < 10) { minutes = "0" + minutes; }
            if (seconds < 10) { seconds = "0" + seconds; }

            return `${minutes}:${seconds}`;
        }
    }
}

declare module String{
    export var format:any;
}