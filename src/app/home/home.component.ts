import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs';
import { CarInfo } from '../shared/interfaces/car-info.interface';
import { CarService } from '../shared/services/car.service';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  cars: Observable<CarInfo>;
  brand = new FormControl();
  filterForm: FormGroup = this.fb.group({
    brand: this.brand
  });
  input = document.getElementById('brand');
  filteredCars: CarInfo[] = [];

  constructor(private carService: CarService, private fb: FormBuilder) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
    this.filter(); // <-- is not updating filtered cars in the view :(
  }

  filter() {
    this.brand.valueChanges.pipe(
      debounceTime(300),
      switchMap((brand: string) => this.carService.getCarByBrand(brand)),
    ).subscribe((res) => {
      this.filteredCars.push(res);
    });
  }
}
