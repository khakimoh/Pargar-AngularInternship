import { Component, OnInit } from '@angular/core';
import { Headeritem, Homeitem } from 'src/app/model/home.model';
import { ApiService } from 'src/app/services/server/api/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  homeData: Homeitem[] = [];
  homeData0:any;
  homeData1:any;
  homeData2:any;
  homeData3:any;
  homeData4:any;
  homeData5:any;
  homeData6:any;
  homeData7:any;
  homeData8:any;
  headerData: Headeritem[] = [];
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.home();
  }

  home() {
    this.apiService.getHomeData().subscribe(
      (response) => {
        this.headerData = response.headeritem;
        this.homeData = response.homeitem;
        this.homeData0=this.homeData[0];
        this.homeData1=this.homeData[1];
        this.homeData2=this.homeData[2];
        this.homeData3=this.homeData[3];
        this.homeData4=this.homeData[4];
        this.homeData5=this.homeData[5];
        this.homeData6=this.homeData[6];
        this.homeData7=this.homeData[7];
        this.homeData8=this.homeData[8];
        console.log(this.homeData0);
      }
    );
  }
}
