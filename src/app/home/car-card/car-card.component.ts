import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CarInfo } from '../../shared/interfaces/car-info.interface';
import { CarDetailComponent } from '../car-detail/car-detail.component';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: [ './car-card.component.scss' ]
})
export class CarCardComponent {

  constructor(private details: MatDialog) { }

  @Input() car: CarInfo;

  openDetails() {
    this.details.open(CarDetailComponent, {
      height: '400px',
      data: {
        image: this.car.image,
        description: this.car.description
      }
    });
  }
}
