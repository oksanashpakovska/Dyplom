import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TourComponent } from './tour/tour.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
//import { TourDetailComponent} from "./tour/tour-detail/tour-detail.component";


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'tour', component: TourComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
