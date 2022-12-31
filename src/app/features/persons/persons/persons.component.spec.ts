import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonsComponent} from './persons.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TestingModule} from '@core/testing/testing.module';

describe('PersonsComponent', () => {
  let component: PersonsComponent;
  let fixture: ComponentFixture<PersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [TestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
