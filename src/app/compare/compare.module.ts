import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompareComponent } from './compare.component';
import { MaterialModule } from '../material/material.module';
import { CompareCardComponent } from './compare-card/compare-card.component';

@NgModule({
  declarations: [
    CompareComponent,
    CompareCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CompareModule { }
