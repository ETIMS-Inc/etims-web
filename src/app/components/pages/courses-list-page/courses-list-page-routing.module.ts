import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListPageComponent } from './courses-list-page.component';

const routes: Routes = [{ path: '', component: CoursesListPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesListPageRoutingModule { }
