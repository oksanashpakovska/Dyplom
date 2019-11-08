import { Component, OnInit, HostBinding } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
