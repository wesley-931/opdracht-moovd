import {Component, Input, OnInit} from '@angular/core';
import {Avatars} from '../avatar.data';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input()
  public avatarId?: number | null;

  @Input()
  public size: 'md' | 'sm' = 'md';

  private noAvatar =
    'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg';

  public get avatar(): string {
    const avatars = Avatars;
    const avatar = avatars.find(avatar => avatar.id === this.avatarId)?.url;

    return avatar ? avatar : this.noAvatar;
  }
}
