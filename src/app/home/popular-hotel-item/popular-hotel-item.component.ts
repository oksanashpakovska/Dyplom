import { Component, OnInit, Input } from '@angular/core';
import Hotel from "../../model/hotel";


@Component({
  selector: 'app-popular-hotel-item',
  templateUrl: './popular-hotel-item.component.html',
  styleUrls: ['./popular-hotel-item.component.css']
})
export class PopularHotelItemComponent implements OnInit {

  @Input() singleHotel: Hotel;

  constructor() { }

  ngOnInit() {
  }

}
