import { Injectable } from '@angular/core';
import { CanActivate, Route, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, CanLoad, UrlSegment, CanActivateChild } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class MaskGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private stateService: StateService, private snackBar: MatSnackBar) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.stateService.state.maskOn) {
        this.snackBar.open('Put on the mask dude!!!');
        return false;
      }
      return this.stateService.state.maskOn;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canActivate(next, state);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.stateService.state.maskOn) {
      this.snackBar.open('Put on the mask dude!!!');
      return false;
    }
    return this.stateService.state.maskOn;
  }
}
