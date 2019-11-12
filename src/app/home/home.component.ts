import { Component, OnInit,  } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';

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

  Restaurants:Restaurant[]=[];
  Hotrls:Hotel[]=[];
  Tours:Tour[]=[];
  Shops:Shop[]=[];
  HomeSearch:string;

  RestorantButton:boolean = false;
  HotelButton:boolean = false;
  TourButton:boolean = false;
  ShopButton:boolean=false;

  //CountrySearch:string;

  // countryForm: FormGroup;
  // countries = ['USA', 'Canada', 'Uk']


  constructor(/*private fb: FormBuilder,*/private restaurantService: RestaurantService, private hotelService: HotelService, private tourService: TourService, private shopService: ShopService) { }

  ngOnInit() {
    this.Restaurants = this.restaurantService.getAllRestaurant();
    this.Hotrls = this.hotelService.getFourHotels();
    this.Tours = this.tourService.getFiveTours();
    this.Shops = this.shopService.getAllShops();
    // this.countryForm = this.fb.group({
    //   countryControl: ['Canada']
    // });
  }
  onSearch(){
    //console.log(this.CountrySearch);
    this.Restaurants = this.restaurantService.SearchRestaurant(this.HomeSearch);
    this.Hotrls = this.hotelService.SearchHotels(this.HomeSearch);
    this.Tours = this.tourService.SearchTours(this.HomeSearch);
    this.Shops = this.shopService.SearchShops(this.HomeSearch);
  }
  onChange(event){
    this.HomeSearch = event.target.value;
  }
  // onCountryChange(event){
  //   this.CountrySearch = event;
  // }

}
