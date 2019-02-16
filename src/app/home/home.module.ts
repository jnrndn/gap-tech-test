import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarCardComponent } from './car-card/car-card.component';
import { MaterialModule } from '../material/material.module';
import { CarDetailComponent } from './car-detail/car-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarCardComponent,
    CarDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class HomeModule { }
