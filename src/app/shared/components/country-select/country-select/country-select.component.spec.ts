import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CountrySelectComponent} from './country-select.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TestingModule} from '@core/testing/testing.module';
import {ReactiveFormsModule} from '@angular/forms';

describe('CountrySelectComponent', () => {
  let component: CountrySelectComponent;
  let fixture: ComponentFixture<CountrySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountrySelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [TestingModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CountrySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
