import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest , HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../storage/local-storage.service';
import {LoadingService} from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService,
    private _loading: LoadingService
    ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.localStorageService.token;
    this._loading.setLoading(true, req.url);

    if (token) {
      req =req.clone({
        setHeaders:{
        Authorization: `Token ${token}`,
        'Accept-Language': 'fa-IR'
        }
      });
    }
    
    return next.handle(req).pipe(
      tap(
        event => {
          console.log(event)
          if (event instanceof HttpResponse) {
            this._loading.setLoading(false, req.url);
          }
        },
        error => {
          console.log(error.error.error);
          this._loading.setLoading(false, req.url);
        }
      )
    );
  }
}

