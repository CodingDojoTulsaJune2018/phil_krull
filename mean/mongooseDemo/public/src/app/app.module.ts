import { HttpService } from './http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule
  ],

  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
