import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimalsNewComponent } from './animals-new/animals-new.component';
import { AnimalsShowComponent } from './animals-show/animals-show.component';
import { AnimalsShowOneComponent } from './animals-show/animals-show-one/animals-show-one.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AnimalsNewComponent,
    AnimalsShowComponent,
    AnimalsShowOneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
