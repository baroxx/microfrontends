import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './elements/one.component';
import { TwoComponent } from './elements/two.component';

const routes: Routes = [
  { path: 'home', component: OneComponent },
  { path: 'details/:name', component: TwoComponent },
  { path: '**', component: OneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }