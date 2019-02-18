import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarInfo } from '../interfaces/car-info.interface';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsEnpoint = './assets/cars.json';

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarInfo> {
    return this.http.get<CarInfo>(this.carsEnpoint);
  }

  getCarById(id: number) {
    return this.http.get<CarInfo>(this.carsEnpoint).pipe(
      filter((car: CarInfo) => car.id === id),
    );
  }
}
