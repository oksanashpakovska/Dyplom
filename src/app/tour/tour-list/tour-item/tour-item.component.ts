import { Component, OnInit, Input } from '@angular/core';
import Tour from "../../../model/tour";

@Component({
  selector: 'app-tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.css']
})
export class TourItemComponent implements OnInit {

  @Input() singleTour:Tour;

  constructor() { }

  ngOnInit() {
    console.log(this.singleTour);
  }

}
