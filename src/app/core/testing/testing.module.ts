import {NgModule} from '@angular/core';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
@NgModule({
  imports: [
    FontAwesomeTestingModule,
    RouterTestingModule,
    BrowserAnimationsModule,
    HttpClientTestingModule,
  ],
  exports: [
    FontAwesomeTestingModule,
    RouterTestingModule,
    BrowserAnimationsModule,
  ],
})
export class TestingModule {}
