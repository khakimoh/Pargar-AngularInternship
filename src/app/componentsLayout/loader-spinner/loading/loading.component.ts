import { Component, OnInit } from '@angular/core';
import {delay} from 'rxjs/operators';
import {LoadingService} from '../../../services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  
  loading: boolean = false;

  constructor(
    private _loading: LoadingService
  ) { }

  ngOnInit(): void {
    this.listenToLoading();
  }
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

}
