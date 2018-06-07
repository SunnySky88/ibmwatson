import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { RouterappComponent } from './routerapp/routerapp.component';
import { Routeapp2Component } from './routeapp2/routeapp2.component';



@NgModule({
  declarations: [
    AppComponent,
    RouterappComponent,
    Routeapp2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
         {
            path: 'routerapp',
            component: RouterappComponent
         },
          {
            path: 'routerapp2',
            component: Routeapp2Component
         }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
