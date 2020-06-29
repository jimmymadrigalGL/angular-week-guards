import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, CanLoad, UrlSegment, CanActivateChild } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class HandsGuard implements CanActivate {

  constructor(private stateService: StateService, private snackBar: MatSnackBar) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.stateService.state.handsWashed) {
        this.snackBar.open('Wash your hands pig!!!');
        return false;
      }
      return this.stateService.state.handsWashed;
  }
}
