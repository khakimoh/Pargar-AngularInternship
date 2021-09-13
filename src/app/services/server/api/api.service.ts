import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl: string = environment.baseUrl;
const storeId: number = environment.storeId;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getVerificationCode(data: any): Observable<any>{
    return this.httpClient.post<any>(`${baseUrl}/mobile_login_step1/${storeId}` , data);
  }
  getTokenWithCode(data: any): Observable<any>{
    return this.httpClient.post<any>(`${baseUrl}/mobile_login_step2/${storeId}` , data);
  }
  getUserProfile(): Observable<any>{
    return this.httpClient.get<any>(`${baseUrl}/profile`);
  }
}


  // getTokenAuth(filters: any): Observable<any>{
  //   const queryItem = '/mobile_login_step1/7';
  //   let params = new HttpParams();
  //   for(let filter in filters){
  //     if(filters[filter]){
  //       params = params.append(filter, filters[filter]);
  //     }
  //   }
  //   return this.httpClient.get<any>(`${baseUrl}${queryItem}` , {params});
  // }