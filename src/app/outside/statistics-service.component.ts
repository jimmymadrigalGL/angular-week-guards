import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { StatsService, CountryStats } from './services/stats.service';


@Component({
  selector: 'app-statistics-service',
  templateUrl: './statistics-service.component.html'
})
export class StatisticsServiceComponent implements OnInit, OnDestroy {
  public country: string;
  public stats: CountryStats;
  private subscriptions: Subscription = new Subscription();

  constructor(private statsService: StatsService, private router: Router, private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.subscriptions.add(
      this.route.params.pipe(switchMap(params =>
        this.statsService.getStats(params[`country`])
          .pipe(map(stats => this.stats = stats && stats.length ? ( stats[stats.length - 1]) : null))
      )).subscribe());
  }

  public changeCountry(country: string): void {
    this.router.navigate(['/outside/stats/service/', country]);
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
