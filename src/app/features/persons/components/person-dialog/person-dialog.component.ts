import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PersonFormFields} from '@core/enums';
import {Person} from '@core/interfaces';
import {take, timer} from 'rxjs';

export interface PersonDialogData {
  person?: Person;
}
@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss'],
})
export class PersonDialogComponent {
  public person?: Person;

  public formLoading = false;
  public fields = PersonFormFields;
  public form = new FormGroup({
    [this.fields.Identifier]: new FormControl<number | null>(null, [
      Validators.required,
    ]),
    [this.fields.Name]: new FormControl<string | null>(null, [
      Validators.required,
    ]),
    [this.fields.Email]: new FormControl<string | null>(null, [
      Validators.required,
      Validators.email,
    ]),
    [this.fields.DateOfBirth]: new FormControl<Date | null>(null, [
      Validators.required,
    ]),
    [this.fields.Country]: new FormControl<string | null>(null, [
      Validators.required,
    ]),
  });

  public get editMode(): boolean {
    return !!this.person;
  }

  constructor(
    private dialog: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data?: PersonDialogData
  ) {
    if (data?.person) {
      this.person = data?.person;
      this.form.patchValue(this.person);
    }
  }

  public save(): void {
    if (!this.form.dirty && !this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this.formLoading = true;
    timer(1500)
      .pipe(take(1))
      .subscribe(() => {
        if (this.person) {
          this.update();
        } else {
          this.create();
        }
      });
  }

  public close(): void {
    this.dialog.close();
  }

  private update(): void {
    //
  }

  private create(): void {
    //
  }

  private delete(): void {
    //
  }
}
