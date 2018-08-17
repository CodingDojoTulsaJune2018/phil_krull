import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserShowOneComponent } from './user-show-one/user-show-one.component';

@NgModule({
  declarations: [
    AppComponent,
    UserShowComponent,
    UserAddComponent,
    UserShowOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
