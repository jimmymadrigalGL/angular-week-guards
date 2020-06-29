import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsideComponent } from './outside.component';
import { CarComponent } from './car.component';
import { StatisticsComponent } from './statistics.component';

import { OutsideRoutingModule } from './outside-routing.module';
import { StatisticsServiceComponent } from './statistics-service.component';
import { StatisticsResolverComponent } from './statistics-resolver.component';
import { StatisticsResolverObservableComponent } from './statistics-resolver-observable.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticsMenuComponent } from './statistics-menu.component';
import { ShopComponent } from './shop.component';


@NgModule({
  declarations: [
    OutsideComponent,
    CarComponent,
    ShopComponent,
    StatisticsComponent,
    StatisticsServiceComponent,
    StatisticsResolverComponent,
    StatisticsResolverObservableComponent,
    StatisticsMenuComponent ],
  imports: [
    CommonModule,
    SharedModule,
    OutsideRoutingModule
  ]
})
export class OutsideModule { }
