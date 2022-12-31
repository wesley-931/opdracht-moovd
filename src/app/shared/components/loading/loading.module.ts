import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader/loader.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LoaderComponent],
})
export class LoadingModule {}
