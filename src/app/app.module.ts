import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page404Component } from './extra/components/error/page404/page404.component';
import { HeaderComponent } from './extra/components/template/header/header.component';
import { FooterComponent } from './extra/components/template/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
