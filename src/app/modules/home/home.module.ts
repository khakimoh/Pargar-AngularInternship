import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderCardComponent } from './components/slider-card/slider-card.component';
import { DescriptionProductComponent } from './components/description-product/description-product.component';
import { PosterProductComponent } from './components/poster-product/poster-product.component';



@NgModule({
  declarations: [
    BannerComponent,
    LayoutComponent,
    SliderCardComponent,
    DescriptionProductComponent,
    PosterProductComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule ,
  ]
})
export class HomeModule { }
