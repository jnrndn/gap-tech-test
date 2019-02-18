import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarCardComponent } from './car-card/car-card.component';
import { MaterialModule } from '../material/material.module';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CarCardComponent,
    CarDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    CarDetailComponent,
  ]
})
export class HomeModule { }
