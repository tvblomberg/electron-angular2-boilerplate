import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'paulass'
})

export class GregPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        if (value) {
            return `${value} EH!`;
        }
    }
}