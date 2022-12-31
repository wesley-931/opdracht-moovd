import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoaderComponent} from './loader.component';
import {TestingModule} from '@core/testing/testing.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [TestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
