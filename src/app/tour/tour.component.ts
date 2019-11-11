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
  reqwest:string;

  constructor(private tourService:TourService) {
    
  }

  ngOnInit() {
    this.Tours = this.tourService.getAllTours()
  }

  onChange(event: any) {
    this.reqwest = event.target.value;
  }

  onSearch() {
    this.Tours = this.tourService.SearchTours(this.reqwest);
  }

}
