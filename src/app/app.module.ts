import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

/* Components */
import { NotificationsComponent } from './examples/examples-notifications.component';
import { ProjectComponent } from './project/project.component';
import { CameraComponent } from './project/camera.component';
import { PdfComponent } from './project/pdf.component';
import { TestComponent } from './project/test.component';
import { GregComponent } from './project/greg.component';
import { MeetingComponent, TimerComponent } from './meeting';

/* 3rd Party Modules */
import { CodemirrorModule } from 'ng2-codemirror';
/* Material Design - Because why not? */
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

/* Pipes */
import { GregPipe } from './shared/pipes/greg.pipe';
import { TimerPipe } from './shared/pipes/timer.pipe';

/* Services */
import { RenderService } from './shared/services/render.service';


@NgModule({
  imports: [
    CodemirrorModule,
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MeetingComponent },
      { path: 'home', component: MeetingComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'camera', component: CameraComponent },
      { path: 'pdf', component: PdfComponent },
      { path: 'greg', component: TestComponent }
    ]),
    HttpModule
  ],
  declarations: [
    AppComponent,
    NotificationsComponent,
    ProjectComponent,
    CameraComponent,
    PdfComponent,
    TestComponent,
    GregPipe,
    GregComponent,
    MeetingComponent,
    TimerComponent,
    TimerPipe
  ],
  providers: [
    RenderService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
