import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AvatarComponent} from './avatar.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TestingModule} from '@core/testing/testing.module';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvatarComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [TestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
