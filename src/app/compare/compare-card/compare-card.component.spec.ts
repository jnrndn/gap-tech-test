import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCardComponent } from './compare-card.component';

describe('CompareCardComponent', () => {
  let component: CompareCardComponent;
  let fixture: ComponentFixture<CompareCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
