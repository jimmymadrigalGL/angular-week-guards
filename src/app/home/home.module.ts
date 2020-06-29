import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { DefaultComponent } from './default.component';
import { HomrRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProfileComponent, DefaultComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomrRoutingModule
  ]
})
export class HomeModule { }
