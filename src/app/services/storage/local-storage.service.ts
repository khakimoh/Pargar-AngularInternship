import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  token: any;
  
  constructor() {
    localStorage.setItem('lang',"en");
   }

  get lang(){
    return localStorage.getItem('lang');
  }
  set lang(str:string | null){
    localStorage.setItem('lang',str || '');
  }

}
