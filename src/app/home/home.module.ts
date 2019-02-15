import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarCardComponent } from './car-card/car-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
