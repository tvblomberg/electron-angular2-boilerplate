import { Component, OnInit, ApplicationRef } from '@angular/core';
import electron = require('electron');
import { RenderService } from '../shared/services/render.service';

@Component({
    selector: 'pdf',
    templateUrl: 'pdf.component.html'
})
export class PdfComponent implements OnInit {
    private renderService: RenderService;
    public path: string = "";
    public pubSub: any;
    private applicationRef: ApplicationRef;
    constructor(renderService: RenderService, applicationRef: ApplicationRef) { 
        this.renderService = renderService;
        this.applicationRef = applicationRef;
    }

    ngOnInit() { 
        this.pubSub = this.renderService.printFinished.subscribe((data: any) => {
            console.log(data);
            if (data) {
                this.path = data.message;
                this.detectChanges();
            }
        });
    }

    public createPdf() {
        this.renderService.createPdf();
    }

    ngOnDestroy() {
        this.pubSub.unsubscribe();
    }

    public detectChanges() {
        this.applicationRef.tick();
    }

}