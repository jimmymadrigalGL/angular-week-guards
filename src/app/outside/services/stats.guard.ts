import { Injectable } from '@angular/core';
import { RouterStateSnapshot, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountryStats, StatsService } from './stats.service';

@Injectable({
  providedIn: 'root'
})
export class StatsGuard implements Resolve<CountryStats> {

  constructor(private statsService: StatsService) {}

  public resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<CountryStats> {
      const country = next.params[`country`];
      return this.statsService.getStats(country)
        .pipe(map(stats => stats && stats.length ? ( stats[stats.length - 1]) : null));
  }

}
