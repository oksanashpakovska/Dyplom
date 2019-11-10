import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HotelService} from "./hotel.service";
import {TourService} from "./tour.service";
import {RestaurantService} from "./restaurant.service";
import { ShopService} from "./shop.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HotelItemComponent } from './hotels/hotel-item/hotel-item.component';
import { HotelDetailComponent } from './hotels/hotel-detail/hotel-detail.component';
import { FooterComponent } from './footer/footer.component';
import { TourItemComponent } from './tour/tour-item/tour-item.component';
import { TourDetailComponent } from './tour/tour-detail/tour-detail.component';
import { RestorantItemComponent } from './home/restorant-item/restorant-item.component';
import { ShopItemComponent } from './home/shop-item/shop-item.component';
import { PopularHotelItemComponent } from './home/popular-hotel-item/popular-hotel-item.component';
import { TopTourItemComponent } from './home/top-tour-item/top-tour-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TourComponent,
    HotelsComponent,
    BlogComponent,
    ContactComponent,
    HeaderComponent,
    HotelItemComponent,
    HotelDetailComponent,
    FooterComponent,
    TourItemComponent,
    TourDetailComponent,
    RestorantItemComponent,
    ShopItemComponent,
    PopularHotelItemComponent,
    TopTourItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [HotelService, TourService, RestaurantService, ShopService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
