import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuard implements CanActivate {
  constructor(private router: Router, private stateService: StateService, private snackBar: MatSnackBar) {

  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const product: string = next.params[`product`];
      if (product.toLowerCase() === 'sex') {
        this.snackBar.open(`You can't have sex, this is a pandemic!!!`);
        this.router.navigate(['/overview']);
        return false;
      }
      if (this.stateService.state.items.indexOf(product) >= 0) {
        this.snackBar.open(`Product '${product}' already exists`);
        this.router.navigate(['/overview']);
        return false;
      }
      this.stateService.state.items.push(product);
      this.router.navigate(['/outside/shop']);
      return true;
  }

}
