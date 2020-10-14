import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { EMPTY } from 'rxjs';

import { ActorsDataService } from "../actors-data.service";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private actorsDataService: ActorsDataService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (this.actorsDataService.actors.length) {
      return EMPTY;
    }
    return next.handle(req);
  }
}
