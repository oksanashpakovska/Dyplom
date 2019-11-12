import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourDetailComponent } from "./tour-detail/tour-detail.component";
import { TourListComponent } from './tour-list/tour-list.component';



const routes: Routes = [
  { path: 'tours', component: TourListComponent },
  { path: 'tour/:id', component: TourDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
