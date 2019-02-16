import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarInfo } from '../interfaces/car-info.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsEnpoint = './assets/cars.json';

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarInfo> {
    return this.http.get<CarInfo>(this.carsEnpoint);
  }
}
