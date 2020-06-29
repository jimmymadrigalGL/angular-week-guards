import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CountryStats } from './services/stats.service';

@Component({
  selector: 'app-statistics-resolver-observable',
  templateUrl: './statistics-resolver-observable.component.html'
})
export class StatisticsResolverObservableComponent implements OnDestroy {
  public stats: CountryStats;
  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.subscriptions.add(this.route.data.subscribe(data => this.stats = data[`stats`]));
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public changeCountry(country: string): void {
    this.router.navigate(['/outside/stats/resolver-observable/', country]);
  }
}
