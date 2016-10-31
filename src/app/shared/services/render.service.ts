import { Injectable, EventEmitter } from '@angular/core';
import electron = require('electron');

@Injectable()
export class RenderService {
    private ipc: any = electron.ipcRenderer;
    public printFinished: any = new EventEmitter();
    constructor() { }

    ngOnInit() {
        console.log(electron);
    }

    public createPdf() {
        this.ipc.send('print-to-pdf');
        let self = this;
        this.ipc.on('wrote-pdf', function (event: any, path: any) {
            const message = `Wrote PDF to: ${path}`;
            
            self.printFinished.emit({
                message: message
            });
        });
    }

    public online(online: string) {
        this.ipc.send('online', online);
    }
}