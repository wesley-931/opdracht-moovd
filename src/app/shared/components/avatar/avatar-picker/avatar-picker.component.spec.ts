import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AvatarPickerComponent} from './avatar-picker.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TestingModule} from '@core/testing/testing.module';

describe('AvatarPickerComponent', () => {
  let component: AvatarPickerComponent;
  let fixture: ComponentFixture<AvatarPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarPickerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [TestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
