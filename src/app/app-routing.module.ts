import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewModule } from './overview/overview.module';
import { HomeModule } from './home/home.module';

import { HandsGuard } from './shared/shared.module';
import { MaskGuard } from './shared/shared.module';
import { AgeGuard } from './shared/shared.module';
import { ProductGuard } from './shared/shared.module';


const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full'  },
  { path: 'overview', loadChildren: () => OverviewModule },
  { path: 'home', loadChildren: () => HomeModule,
      canActivate: [HandsGuard]
  },
  { path: 'outside', loadChildren: () => import('./outside/outside.module').then(m => m.OutsideModule),
    /* Uncomment to test*/  canActivate: [AgeGuard, MaskGuard],
    /* Uncomment to test*/  canLoad: [MaskGuard],
  },
  { path: 'add/:product',
    loadChildren: () => HomeModule, // does nothing
    // we cannot use redirectTo, cause it would ocurr before any guard
    /* Uncomment to test*/  canActivate: [ProductGuard],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
