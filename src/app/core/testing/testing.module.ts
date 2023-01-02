import {NgModule} from '@angular/core';
import {FontAwesomeTestingModule} from '@fortawesome/angular-fontawesome/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PipesModule} from '@shared/pipes/pipes/pipes.module';
@NgModule({
  imports: [
    FontAwesomeTestingModule,
    RouterTestingModule,
    BrowserAnimationsModule,
    HttpClientTestingModule,
    PipesModule,
  ],
  exports: [
    FontAwesomeTestingModule,
    RouterTestingModule,
    BrowserAnimationsModule,
    PipesModule,
  ],
})
export class TestingModule {}
