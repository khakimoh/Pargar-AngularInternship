import { Component, Input, OnInit } from '@angular/core';
import { Feature_avatar, Homeitem, Products } from 'src/app/model/home.model';

@Component({
  selector: 'app-poster-product',
  templateUrl: './poster-product.component.html',
  styleUrls: ['./poster-product.component.scss']
})
export class PosterProductComponent implements OnInit {
  @Input('poster') posterData: Products | undefined;
  name:string | undefined;
  featureAvatar:Feature_avatar[] | any;
  constructor() { }

  ngOnInit(): void {
    this.name=this.posterData?.name;
    this.featureAvatar=this.posterData?.feature_avatar;
    this.assignProduct();
  }
  assignProduct(){
    this.featureAvatar=this.featureAvatar.xhdpi;
  }

}
