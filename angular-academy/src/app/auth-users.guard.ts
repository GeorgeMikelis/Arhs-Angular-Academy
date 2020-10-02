import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthUsersGuard implements CanActivate {
  constructor(private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const id = next.queryParams.id;
    if(id == 1 || id == 2 || id == 3 || id == 5 || id == 8) {
      return true;
    }
    else {
      return false;
    }
  }
}
