import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
