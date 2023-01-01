import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarPickerComponent} from './avatar-picker/avatar-picker.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AvatarPickerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AvatarPickerComponent],
})
export class AvatarPickerModule {}
