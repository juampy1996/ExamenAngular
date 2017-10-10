import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component6Component} from './component6/component6.component';
import {Component9Component} from './component9/component9.component';
import {Component7Component} from './component7/component7.component';
const routes: Routes = [
  {
    path: '',
    component:Component6Component
  },
  {
    path: 'componente9',
    component:Component9Component
  }
  ,
  {
    path: 'componente7',
    component:Component7Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
