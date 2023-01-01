import {Component, OnInit} from '@angular/core';
import {DialogService} from '@core/services/dialog/dialog.service';
import {finalize, take, timer} from 'rxjs';
import {PersonDialogComponent} from '../components/person-dialog/person-dialog.component';
import {Person} from '@core/interfaces';
import * as dayjs from 'dayjs';
export const persons: Array<Person> = [
  {
    identifier: 1,
    name: 'Henk Buren',
    email: 'henk@test.com',
    avatar: '',
    dateOfBirth: dayjs('1969-04-20').toDate(),
    country: 'Netherlands (the)',
  },
  {
    identifier: 2,
    name: 'Mart Slager',
    email: 'mart@test.com',
    avatar: '',
    dateOfBirth: dayjs('1992-03-11').toDate(),
    country: 'Netherlands (the)',
  },
  {
    identifier: 3,
    name: 'Mark Benen',
    email: 'mark@test.com',
    avatar: '',
    dateOfBirth: dayjs('1988-02-03').toDate(),
    country: 'Netherlands (the)',
  },
  {
    identifier: 4,
    name: 'Jordy Strevend',
    email: 'jordy@test.com',
    avatar: '',
    dateOfBirth: dayjs('1997-02-27').toDate(),
    country: 'Netherlands (the)',
  },
  {
    identifier: 5,
    name: 'Wesley Barink',
    email: 'wesley@test.com',
    avatar: '',
    dateOfBirth: dayjs('1999-07-21').toDate(),
    country: 'Netherlands (the)',
  },
];
@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  public persons = persons;
  public isLoading = true;

  constructor(private dialog: DialogService) {}
  public ngOnInit(): void {
    this.initialize();
  }

  public createPerson(): void {
    this.dialog.open(PersonDialogComponent);
  }
  private initialize(): void {
    this.fetchPersons();
  }

  /**
   * Fetches person from API
   */
  private fetchPersons(): void {
    timer(250)
      .pipe(
        take(1),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: () => {
          // Do things with persons
        },
      });
  }
}
