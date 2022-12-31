import {Component} from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent {
  public persons = [1, 2, 3, 4, 5, 6];
}
