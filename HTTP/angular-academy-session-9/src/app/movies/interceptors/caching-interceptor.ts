import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
} from "@angular/common/http";


import { ActorsDataService } from "../actors-data.service";
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: ActorsDataService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cachedResponse = this.cache.get(req);
    if (cachedResponse) {
      console.log('request was prevented from firing because data are in cache')
      console.log(cachedResponse);
    }
    return cachedResponse ? of(cachedResponse) : this.sendRequest(req, next, this.cache);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: ActorsDataService): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          cache.put(req, event);
        }
      })
    );
  }
}
