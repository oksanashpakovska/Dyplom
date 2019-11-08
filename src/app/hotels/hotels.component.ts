import { Component, OnInit } from '@angular/core';
import { HotelService } from "../hotel.service";
import Hotel from "../model/hotel";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
    
    hotels:Hotel[];

  constructor(private hotelService:HotelService) { }

  ngOnInit() {
    this.hotels=this.hotelService.getAllHotels()
  }

}
