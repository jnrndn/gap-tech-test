import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarInfo } from '../interfaces/car-info.interface';
import { Observable } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { isEmpty } from 'lodash';

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
    return this.http.get<CarInfo[]>(this.carsEnpoint).pipe(
      mergeMap((cars: CarInfo[]) => cars),
      filter((car: CarInfo) => {
        return car.id === id;
      })
    );
  }

  getCarByBrand(brand: string) {
    return this.http.get<CarInfo[]>(this.carsEnpoint).pipe(
      mergeMap((cars: CarInfo[]) => cars),
      filter((car: CarInfo) => {
        return car.brand.toLowerCase() === brand.toLowerCase();
      })
    );
  }
}
