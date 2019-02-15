import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarInfo } from '../home/car-card/car-info.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarInfo> {
    const carsEnpoint = './assets/cars.json';
    console.log('ajam');

    return this.http.get<CarInfo>(carsEnpoint);
  }
}
