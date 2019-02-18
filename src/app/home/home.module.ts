import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarCardComponent } from './car-card/car-card.component';
import { MaterialModule } from '../material/material.module';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortByBrandPipe } from '../shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    CarCardComponent,
    CarDetailComponent,
    SortByBrandPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    CarDetailComponent,
  ]
})
export class HomeModule { }
