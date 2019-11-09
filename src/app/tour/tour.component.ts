import { Component, OnInit } from '@angular/core';
import {TourService} from "../tour.service";
import Tour from "../model/tour";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  Tours:Tour[]=[];

  constructor(private tourService:TourService) {
    
  }

  ngOnInit() {
    this.Tours = this.tourService.getAllTours()
  }

}
