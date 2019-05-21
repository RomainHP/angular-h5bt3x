import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports:      [ 
    BrowserModule, FormsModule 
  ],

  declarations: [ 
    AppComponent, AppareilComponent, AppareilViewComponent, AuthComponent 
  ],

  providers: [
    AppareilService
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
