import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { OverviewModule } from './overview/overview.module';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    OverviewModule,
    HomeModule
  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
