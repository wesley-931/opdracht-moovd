import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CountrySelectComponent} from './country-select/country-select.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [CountrySelectComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CountrySelectComponent],
})
export class CountrySelectModule {}
