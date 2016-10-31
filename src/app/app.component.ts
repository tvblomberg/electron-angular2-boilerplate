import { Component, ApplicationRef } from '@angular/core';
import { RenderService } from './shared/services/render.service';
@Component({
  selector: 'electron-app',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.css']
})

export class AppComponent { 
  public title: string = "Hello Angular Electron!";
  public online: string = "";

  constructor(private appRef: ApplicationRef, private renderService: RenderService) {
    
  }
  ngOnInit() {
    this.checkOnline();
  }
  private checkOnline() {
    setInterval(() => {
      if (navigator.onLine) {
        this.online = "Online";
      } else {
        this.online = "Offline";
      }

      this.changeDetection();
      this.renderService.online(this.online);
    }, 1000);
  }

  private changeDetection() {
    this.appRef.tick();
  }
}