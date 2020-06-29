import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';
import { MenuComponent } from './components/menu.component';

export * from './material.module';

export { State } from './models/state.model';
export { AgeGuard } from './services/age.guard';
export { MaskGuard } from './services/mask.guard';
export { HandsGuard } from './services/hands.guard';
export { PlateGuard } from './services/plate.guard';
export { ProductGuard } from './services/product.guard';
export { StateService } from './services/state.service';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MaterialModule,
    MenuComponent,
    FormsModule,
  ]
})
export class SharedModule { }
