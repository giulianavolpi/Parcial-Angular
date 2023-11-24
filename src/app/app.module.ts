import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinosauriosModule } from './dinosaurios/dinosaurios.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DinosauriosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
