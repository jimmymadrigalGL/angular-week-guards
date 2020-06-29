import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CountryStats } from './services/stats.service';

@Component({
  selector: 'app-statistics-resolver',
  templateUrl: './statistics-resolver.component.html'
})
export class StatisticsResolverComponent implements OnInit {
  public stats: CountryStats;

  constructor(private router: Router, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.stats = this.route.snapshot.data[`stats`];
  }

  public changeCountry(country: string): void {
    this.router.navigate(['/outside/stats/resolver/', country]);
  }

}
