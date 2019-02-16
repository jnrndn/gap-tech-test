import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
