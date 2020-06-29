import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingOverviewComponent } from './routing-overview.component';
import { LazyLoadingOverviewComponent } from './lazy-loading-overview.component';
import { GeneralOverviewComponent } from './general-overview.component';
import { GuardsOverviewComponent } from './guards-overview.component';


const routes: Routes = [
  { path: '', component: GeneralOverviewComponent },
  { path: 'routing', component: RoutingOverviewComponent },
  { path: 'lazy-loading', component: LazyLoadingOverviewComponent },
  { path: 'guards', component: GuardsOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
