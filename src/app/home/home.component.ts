import { Component, OnInit, HostBinding } from '@angular/core';

import {RestaurantService} from "../restaurant.service";
import {HotelService} from "../hotel.service";
import {TourService} from "../tour.service";
import {ShopService} from "../shop.service";

import Restaurant from "../model/restaurant";
import Hotel from "../model/hotel";
import Tour from "../model/tour";
import Shop from "../model/shop";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
//   myBackgroundImageUrl = 'https://www.exotictime.ru/workdir/photoalbum/f6fe55d7af945c2f32952b10505134a2/big_nymald.jpg'
// @HostBinding('style.backgroundImage')
// get backgroundImage(){
//   return `url(${myBackgroundImageUrl})`
// }
  Restaurants:Restaurant[]=[];
  Hotrls:Hotel[]=[];
  Tours:Tour[]=[];
  Shops:Shop[]=[];

  constructor(private restaurantService: RestaurantService, private hotelService: HotelService, private tourService: TourService, private shopService: ShopService) { }

  ngOnInit() {
    this.Restaurants = this.restaurantService.getAllRestaurant();
    this.Hotrls = this.hotelService.getFourHotels();
    this.Tours = this.tourService.getFiveTours();
    this.Shops = this.shopService.getAllShops();
  }

}
