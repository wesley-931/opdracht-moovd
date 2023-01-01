import {Component, OnInit} from '@angular/core';
import {DialogService} from '@core/services/dialog/dialog.service';
import {finalize, take, timer} from 'rxjs';
import {
  PersonDialogAfterClosed,
  PersonDialogComponent,
} from '../components/person-dialog/person-dialog.component';
import {Person} from '@core/interfaces';
import * as dayjs from 'dayjs';
export const persons: Array<Person> = [
  {
    identifier: 1,
    name: 'Henk Buren',
    email: 'henk@test.com',
    avatar: '',
    dateOfBirth: '1969-04-20',
    country: 'Netherlands (the)',
  },
  {
    identifier: 2,
    name: 'Mart Slager',
    email: 'mart@test.com',
    avatar: '',
    dateOfBirth: '1992-03-11',
    country: 'Netherlands (the)',
  },
  {
    identifier: 3,
    name: 'Mark Benen',
    email: 'mark@test.com',
    avatar: '',
    dateOfBirth: '1988-02-03',
    country: 'Netherlands (the)',
  },
  {
    identifier: 4,
    name: 'Jordy Strevend',
    email: 'jordy@test.com',
    avatar: '',
    dateOfBirth: '1997-02-27',
    country: 'Netherlands (the)',
  },
  {
    identifier: 5,
    name: 'Wesley Barink',
    email: 'wesley@test.com',
    avatar: '',
    dateOfBirth: '1999-07-21',
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
    this.dialog
      .open<unknown, PersonDialogAfterClosed | undefined>(PersonDialogComponent)
      .subscribe((result?: PersonDialogAfterClosed) => {
        if (result) {
          if (result.type === 'create') {
            if (this.persons.length > 0) {
              result.person.identifier =
                (this.persons[this.persons.length - 1].identifier as number) +
                1;
            } else {
              result.person.identifier = 1;
            }
            this.persons.push(result.person);
          }
        }
      });
  }

  public edit(person: Person): void {
    this.dialog
      .open<unknown, PersonDialogAfterClosed | undefined>(
        PersonDialogComponent,
        {
          person,
        }
      )
      .subscribe((result?: PersonDialogAfterClosed) => {
        if (result) {
          if (result.type === 'edit') {
            this.editPerson(result.person);
          } else {
            this.deletePerson(result.person);
          }
        }
      });
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

  private editPerson(person: Person): void {
    const index = this.getIndexPerson(person);

    this.persons[index] = person;
  }

  private deletePerson(person: Person): void {
    const index = this.getIndexPerson(person);
    this.persons.splice(index, 1);
  }

  private getIndexPerson(person: Person): number {
    const objWithIdIndex = this.persons.findIndex(
      obj => obj.identifier === person.identifier
    );

    return objWithIdIndex;
  }
}
