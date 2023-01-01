import {Component, Input} from '@angular/core';
import {Person} from '@core/interfaces';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})
export class PersonCardComponent {
  @Input()
  public person?: Person;
}
