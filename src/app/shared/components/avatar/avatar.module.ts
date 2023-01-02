import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarPickerComponent} from './avatar-picker/avatar-picker.component';
import {AvatarComponent} from './avatar/avatar.component';

@NgModule({
  declarations: [AvatarPickerComponent, AvatarComponent],
  imports: [CommonModule],
  exports: [AvatarComponent, AvatarPickerComponent],
})
export class AvatarModule {}
