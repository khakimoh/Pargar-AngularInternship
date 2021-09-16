import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './services/storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  spinner:boolean = true;
  constructor(
    private localStorage:LocalStorageService
  ){}
  // title = 'Pargar-AngularInternship';
  // get_value="get_value";
  // age:any=this.get_value;
  // lang: string ="en";
  // submit="submit";
  // en="en";
  // fa="fa";

  // select_lang(lang:string){
  //   this.lang=lang;
  //   this.localStorage.lang = this.lang;
  //   window.location.reload()
  // }
}

