import { Injectable } from '@angular/core';
import { RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class PlateGuard implements CanActivate {

  constructor(private router: Router, private stateService: StateService, private snackBar: MatSnackBar) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const plate = this.stateService.state ? +this.stateService.state.carPlate : null;
      if (isNaN(plate)){
        this.snackBar.open('you need to set you car plate dude!!!');
        this.stateService.redirectUrl = state.url;
        return this.router.createUrlTree(['/home/profile']);
      }
      if (plate === 3 || plate === 4 ){
        this.snackBar.open('You car has a restriction today. Stay home!!!');
        return this.router.createUrlTree(['/home']);
      }
      return true;
  }

}
