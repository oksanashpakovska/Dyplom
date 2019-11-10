import { Component, OnInit, Input } from '@angular/core';
import Tour from "../../model/tour";

@Component({
  selector: 'app-top-tour-item',
  templateUrl: './top-tour-item.component.html',
  styleUrls: ['./top-tour-item.component.css']
})
export class TopTourItemComponent implements OnInit {

  @Input() singleTour:Tour;

  constructor() { }

  ngOnInit() {
  }

}
