import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';
import { SharedModule } from '../shared/shared.module';
import { OverviewRoutingModule } from './overview-routing.module';
import { RoutingOverviewComponent } from './routing-overview.component';
import { LazyLoadingOverviewComponent } from './lazy-loading-overview.component';
import { GuardsOverviewComponent } from './guards-overview.component';
import { GeneralOverviewComponent } from './general-overview.component';



@NgModule({
  declarations: [
    OverviewComponent,
    GuardsOverviewComponent,
    RoutingOverviewComponent,
    LazyLoadingOverviewComponent,
    GeneralOverviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule { }
