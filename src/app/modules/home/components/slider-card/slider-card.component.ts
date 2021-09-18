import { Component, Input, OnInit } from '@angular/core';
import { Feature_avatar, Homeitem, Products } from 'src/app/model/home.model';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {
  @Input('slider') sliderData: Products | undefined;

  name:string | undefined;
  producerName:string | undefined;
  totalView:number | undefined;
  featureAvatar:Feature_avatar[] | any;
  constructor() { }

  ngOnInit(): void {
    this.name=this.sliderData?.name;
    this.producerName=this.sliderData?.producer_name;
    this.totalView=this.sliderData?.total_view;
    this.featureAvatar=this.sliderData?.feature_avatar;
    this.assignProduct();
  }
  assignProduct(){
    this.featureAvatar=this.featureAvatar.xhdpi;
  }
  
}
