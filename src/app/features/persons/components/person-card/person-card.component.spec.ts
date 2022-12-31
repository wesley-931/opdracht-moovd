import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PersonCardComponent} from './person-card.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TestingModule} from '@core/testing/testing.module';

describe('PersonCardComponent', () => {
  let component: PersonCardComponent;
  let fixture: ComponentFixture<PersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [TestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
