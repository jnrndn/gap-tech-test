import { Pipe, PipeTransform } from '@angular/core';
import { CarInfo } from '../interfaces/car-info.interface';

@Pipe({
  name: 'sortByBrand'
})
export class SortByBrandPipe implements PipeTransform {

  transform(cars: CarInfo[]): CarInfo[] {
    if (!cars) {
      return cars;
    }
    return cars.sort((a, b) => {
      const brandA = a.brand.toLowerCase();
      const brandB = b.brand.toLowerCase();
      if (brandA < brandB) {
        return -1;
      }
      if (brandA > brandB) {
        return 1;
      }
      return 0;
    });
  }
}
