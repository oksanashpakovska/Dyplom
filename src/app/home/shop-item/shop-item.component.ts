import { Component, OnInit, Input } from '@angular/core';
import Shop from "../../model/shop";

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() singleShop:Shop;

  constructor() { }

  ngOnInit() {
  }

}
