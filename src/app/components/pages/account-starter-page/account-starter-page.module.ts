import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountStarterPageComponent } from './account-starter-page.component';


const routes: Routes = [
  { path: '', component: AccountStarterPageComponent }
];

@NgModule({
  declarations: [
    AccountStarterPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AccountStarterPageModule { }
