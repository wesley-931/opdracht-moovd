import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Avatars} from '../avatar.data';

@Component({
  selector: 'app-avatar-picker',
  templateUrl: './avatar-picker.component.html',
  styleUrls: ['./avatar-picker.component.scss'],
})
export class AvatarPickerComponent {
  @Input()
  public control = new FormControl<number | null>(null);

  public avatars = Avatars;

  public pickAvatar(id: number): void {
    this.control.setValue(id);
  }
}
