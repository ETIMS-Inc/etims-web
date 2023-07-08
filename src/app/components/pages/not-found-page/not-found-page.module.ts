import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page.component';


const routes: Routes = [
  { path: '', component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NotFoundPageModule { }
