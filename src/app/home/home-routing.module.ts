import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'profile', component: ProfileComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomrRoutingModule { }
