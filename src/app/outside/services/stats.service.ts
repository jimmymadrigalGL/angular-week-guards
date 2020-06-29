import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export class CountryStats {
    Country: string;
    Confirmed: number;
    Deaths: number;
    Recovered: number;
    Active: number;
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public static URL = (country: string) => `https://api.covid19api.com/total/country/${country}`;

  constructor(private http: HttpClient) {}

  public getStats(country: string): Observable<CountryStats[]> {
    return this.http.get<CountryStats[]>(StatsService.URL(country)).pipe(delay(2000));
  }
}
