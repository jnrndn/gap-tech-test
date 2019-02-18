import { Component, OnInit, Input } from '@angular/core';
import { CarInfo } from '../../shared/interfaces/car-info.interface';

@Component({
  selector: 'app-compare-card',
  templateUrl: './compare-card.component.html',
  styleUrls: [ './compare-card.component.scss' ]
})
export class CompareCardComponent implements OnInit {

  @Input() car: CarInfo;

  constructor() { }

  ngOnInit() {
  }

}
