import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {HotelService} from "./hotel.service";

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
    HotelDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ HotelService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
