import {Component, OnInit} from '@angular/core';
import {finalize, take, timer} from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  public persons = [1, 2, 3, 4, 5, 6];
  public isLoading = true;

  public ngOnInit(): void {
    this.initialize();
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
