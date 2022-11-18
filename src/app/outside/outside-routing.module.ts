import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarComponent } from './car.component';
import { StatisticsServiceComponent } from './statistics-service.component';
import { StatisticsResolverObservableComponent } from './statistics-resolver-observable.component';
import { StatisticsResolverComponent } from './statistics-resolver.component';
import { StatsGuard } from './services/stats.guard';
import { StatisticsMenuComponent } from './statistics-menu.component';
import { ShopComponent } from './shop.component';

import { MaskGuard } from '../shared/shared.module';
import { HandsGuard } from '../shared/shared.module';
import { PlateGuard } from '../shared/shared.module';
import { AgeGuard } from '../shared/shared.module';
import { ShopGuard } from './services/shop.guard';

const routes: Routes = [
  {
    path: '',
    /* Uncomment to test* / canActivate: [MaskGuard],*/ // can turn off mask and navigate between children
    /* Uncomment to test* / canActivateChild: [MaskGuard],*/ // cannot do that
    children: [
      { path: '', redirectTo: 'car', pathMatch: 'full' },
      {
        path: 'car',
        component: CarComponent,
        /* Uncomment to test* /  canActivate: [PlateGuard]*/
      },
      {
        path: 'shop',
        component: ShopComponent,
        /* Uncomment to test* /  canActivate: [HandsGuard],*/
        /* Uncomment to test* /  canDeactivate: [ShopGuard],*/
      },
      { path: 'stats', component: StatisticsMenuComponent },
      { path: 'stats/service/:country', component: StatisticsServiceComponent },
      {
        path: 'stats/resolver/:country',
        component: StatisticsResolverComponent,
        resolve: { stats: StatsGuard },
      },
      {
        path: 'stats/resolver-observable/:country',
        component: StatisticsResolverObservableComponent,
        resolve: { stats: StatsGuard },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutsideRoutingModule {}
