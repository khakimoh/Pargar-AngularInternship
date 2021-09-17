import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/server/api/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.homeData();
  }

  homeData() {
    this.apiService.getHomeData().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}
