import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarInfo } from '../shared/interfaces/car-info.interface';
import { CarService } from '../shared/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  cars: Observable<CarInfo>;

  constructor(private carService: CarService, private fb: FormBuilder) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }
}
