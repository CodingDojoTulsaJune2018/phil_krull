import { UserShowOneComponent } from './user-show-one/user-show-one.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserShowComponent } from './user-show/user-show.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: UserShowComponent},
  {path: 'add', component: UserAddComponent},
  {path: 'show/:index', component: UserShowOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
