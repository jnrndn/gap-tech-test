import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CarDetail } from '../../shared/interfaces/car-detail.interface';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: [ './car-detail.component.scss' ]
})
export class CarDetailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: CarDetail) { }
}
