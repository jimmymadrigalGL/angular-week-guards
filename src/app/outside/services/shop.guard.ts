import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree, ActivatedRouteSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { ShopComponent } from '../shop.component';

@Injectable({
  providedIn: 'root'
})
export class ShopGuard implements CanActivate, CanDeactivate<ShopComponent> {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  canDeactivate(
    component: ShopComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.countSelected() === 0) {
        return confirm('No items are selected, are you sure you want to leave the page?');
      }
      return true;
  }

}
