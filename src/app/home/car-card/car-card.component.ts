import { Component, Input } from '@angular/core';
import { CarInfo } from '../../shared/interfaces/car-info.interface';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: [ './car-card.component.scss' ]
})
export class CarCardComponent {

  @Input() car: CarInfo;
}
