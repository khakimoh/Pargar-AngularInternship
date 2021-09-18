import { Component, Input, OnInit } from '@angular/core';
import { Homeitem, Products } from 'src/app/model/home.model';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {
  @Input('slider') sliderData: Homeitem | undefined;
  product:Products[] | any;
  productName:string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.product=this.sliderData?.products;
    this.productName=this.product.name;
  }



}
