import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarInfo } from './car-card/car-info.interface';
import { CarService } from './../service/car-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  cars: Observable<CarInfo>;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
    console.log('cars', this.cars);

  }

}
