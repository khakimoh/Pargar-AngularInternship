import { Component, Input, OnInit } from '@angular/core';
import { Feature_avatar, Homeitem, Products } from 'src/app/model/home.model';

@Component({
  selector: 'app-description-product',
  templateUrl: './description-product.component.html',
  styleUrls: ['./description-product.component.scss']
})
export class DescriptionProductComponent implements OnInit {
  @Input('mainProduct') mainProductData: Products | undefined;
  producerName:string | undefined;
  totalView:number | undefined;
  featureAvatar:Feature_avatar[] | any;
  name: string | undefined;
  description:string | undefined;
  constructor() { }

  ngOnInit(): void {
    this.featureAvatar=this.mainProductData?.feature_avatar;
    this.name=this.mainProductData?.name;
    this.description=this.mainProductData?.description;
    this.producerName=this.mainProductData?.producer_name;
    this.totalView=this.mainProductData?.total_view;
    this.assignProduct();
  }

  assignProduct(){
    this.featureAvatar=this.featureAvatar.xhdpi;
  }

}
