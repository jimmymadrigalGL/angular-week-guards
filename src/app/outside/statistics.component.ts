import { Component,  Input, EventEmitter, Output } from '@angular/core';

import { CountryStats } from './services/stats.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() public stats: CountryStats;
  @Output() public changeCountry: EventEmitter<string> = new EventEmitter<string>();

  public change(country): void {
    this.changeCountry.emit(country);
  }
}
