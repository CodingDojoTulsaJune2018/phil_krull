import { AnimalsShowOneComponent } from './animals-show/animals-show-one/animals-show-one.component';
import { AnimalsShowComponent } from './animals-show/animals-show.component';
import { AnimalsNewComponent } from './animals-new/animals-new.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'add', component: AnimalsNewComponent },
    { path: 'show', component: AnimalsShowComponent, children: [
        { path: 'one/:id', component: AnimalsShowOneComponent}
    ]},
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
