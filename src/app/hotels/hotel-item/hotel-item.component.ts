import { Component, OnInit, Input, ElementRef} from '@angular/core';
import Hotel from "../../model/hotel";

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {

  @Input() singleHotel:Hotel;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    let style: string = `
     .imageses {background-image :url("${this.singleHotel.URL}"); }
    `;

    this.createStyle(style);
  }

  createStyle(style: string): void {
    const styleElement = document.createElement('style');
    styleElement.appendChild(document.createTextNode(style));
    this.el.nativeElement.appendChild(styleElement);
  }

}
