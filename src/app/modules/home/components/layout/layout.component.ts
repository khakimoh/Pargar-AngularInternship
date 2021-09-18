import { Component, OnInit } from '@angular/core';
import { Headeritem, Homeitem } from 'src/app/model/home.model';
import { ApiService } from 'src/app/services/server/api/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  visiableComponent:boolean=true;
  homeData: Homeitem[] = [];
  headerData: Headeritem[] = [];
  homeData0:any;
  homeData1:any;
  homeData2:any;
  homeData3:any;
  homeData4:any;
  homeData5:any;
  homeData6:any;
  homeData7:any;
  homeData8:any;
  homeData9:any;
  homeData10:any;
  homeData11:any;
  homeData12:any;
  homeData13:any;
  homeData14:any;
  homeData15:any;
  homeData16:any;
  homeData17:any;
  homeData18:any;
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.home();
    if(this.homeData){
      this.visiableComponent=true;
    }
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
        this.homeData9=this.homeData[9];
        this.homeData10=this.homeData[10];
        this.homeData11=this.homeData[11];
        this.homeData12=this.homeData[12];
        this.homeData13=this.homeData[13];
        this.homeData14=this.homeData[14];
        this.homeData15=this.homeData[15];
        this.homeData16=this.homeData[16];
        this.homeData17=this.homeData[17];
        this.homeData18=this.homeData[18];
        //console.log(respose);
      }
    );
  }
}
