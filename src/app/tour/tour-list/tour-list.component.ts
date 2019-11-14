import { Component, OnInit } from '@angular/core';
import { TourService } from "../../tour.service";
import Tour from "../../model/tour";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  Tours: Tour[] = [];
  reqwest: string;

  constructor(private tourService: TourService) {

  }

  ngOnInit() {
    this.Tours = this.tourService.getAllTours()
    //console.log(this.Tours);
  }

  onChange(event: any) {
    this.reqwest = event.target.value;
  }

  onSearch() {
    this.Tours = this.tourService.SearchTours(this.reqwest,false);
  }

}
