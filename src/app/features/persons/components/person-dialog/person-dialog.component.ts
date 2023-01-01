import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PersonFormFields} from '@core/enums';
import {Person} from '@core/interfaces';

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

  public fields = PersonFormFields;

  public form = new FormGroup({
    [this.fields.Identifier]: new FormControl<string | null>(null, [
      Validators.required,
    ]),
    [this.fields.Name]: new FormControl<string | null>(null, [
      Validators.required,
    ]),
    [this.fields.Email]: new FormControl<string | null>(null, [
      Validators.required,
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

  public close(): void {
    this.dialog.close();
  }
}
