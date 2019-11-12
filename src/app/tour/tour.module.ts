import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TourRoutingModule } from './tour-routing.module';
import { TourDetailComponent} from "./tour-detail/tour-detail.component";
import { TourListComponent } from './tour-list/tour-list.component';
import { TourItemComponent } from './tour-list/tour-item/tour-item.component';
import { TourComponent } from './tour.component';


@NgModule({
  declarations: [
    TourDetailComponent,
    TourListComponent,
    TourItemComponent,
    TourComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TourRoutingModule
  ]
})
export class TourModule { }
