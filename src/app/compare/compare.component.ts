import { Component, OnInit } from '@angular/core';
import { CarService } from '../shared/services/car.service';
import { CarInfo } from '../shared/interfaces/car-info.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: [ './compare.component.scss' ]
})
export class CompareComponent implements OnInit {

  selected1: CarInfo;
  selected2: CarInfo;
  selected3: CarInfo;
  cars: Observable<CarInfo[]>;
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }
}
