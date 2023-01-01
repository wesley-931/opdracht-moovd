import {Component, OnInit} from '@angular/core';
import {DialogService} from '@core/services/dialog/dialog.service';
import {finalize, take, timer} from 'rxjs';
import {PersonDialogComponent} from '../components/person-dialog/person-dialog.component';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  public persons = [1, 2, 3, 4, 5, 6];
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
