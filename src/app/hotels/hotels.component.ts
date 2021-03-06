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
    reqwest:string;

  constructor(private hotelService:HotelService) { }

  ngOnInit() {
    this.hotels=this.hotelService.getAllHotels()
  }

  onChange(event: any){
    this.reqwest = event.target.value;
    //console.log(this.reqwest);
  }

  onSearch(){
    this.hotels = this.hotelService.SearchHotels(this.reqwest,false);
    //console.log(this.hotels);
  }
  

}
