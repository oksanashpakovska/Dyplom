import { Component, OnInit, Input } from '@angular/core';
import Restaurant from "../../model/restaurant";

@Component({
  selector: 'app-restorant-item',
  templateUrl: './restorant-item.component.html',
  styleUrls: ['./restorant-item.component.css']
})
export class RestorantItemComponent implements OnInit {

  @Input() singleRestaurant:Restaurant;

  constructor() { }

  ngOnInit() {
  }

}
