import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const baseUrl: string = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getTokenAuth(filters: any): Observable<any>{
    const queryItem = 'templates/phoneLoginDialog.html';
    let params = new HttpParams();
    for(let filter in filters){
      if(filters[filter]){
        params = params.append(filter, filters[filter]);
      }
    }
    return this.httpClient.get<any>(`${baseUrl}${queryItem}` , {params});
  }
}
