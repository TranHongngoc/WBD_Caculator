import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaculatorComponent } from './caculator/caculator.component';
import {FormsModule} from '@angular/forms';
import { ColorPickComponent } from './color-pick/color-pick.component';

@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent,
    ColorPickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
