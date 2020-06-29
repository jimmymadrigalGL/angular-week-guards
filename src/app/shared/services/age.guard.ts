import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, Router, CanActivateChild } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class AgeGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private stateService: StateService, private snackBar: MatSnackBar) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const age = this.stateService.state ? this.stateService.state.profileAge : null;
      if (isNaN(age)){
        this.snackBar.open('you need to set you age man!!!');
        this.stateService.redirectUrl = state.url;
        return this.router.createUrlTree(['/home/profile']);
      }
      if (age > 50 ){
        this.snackBar.open('Stay home old man, you are at risk outside!!!');
        return this.router.createUrlTree(['/home']);
      }
      return true;
    }


  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canActivate(next, state);
    }
}
