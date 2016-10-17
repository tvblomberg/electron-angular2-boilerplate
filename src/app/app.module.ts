import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CodemirrorModule } from 'ng2-codemirror';

/* Material Design - Because why not? */
import { MaterialModule } from '@angular/material';

/* Components */
import { NotificationsComponent } from './examples/examples-notifications.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    CodemirrorModule,
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProjectComponent },
      { path: 'home', component: ProjectComponent },
      { path: 'notifications', component: NotificationsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    NotificationsComponent,
    ProjectComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
