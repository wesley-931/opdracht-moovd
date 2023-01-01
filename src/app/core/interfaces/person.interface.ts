import {PersonFormFields} from '@core/enums';

export interface Person {
  [PersonFormFields.Identifier]: string;
  [PersonFormFields.Name]: string;
  [PersonFormFields.Email]: string;
  [PersonFormFields.Avatar]: string;
  [PersonFormFields.DateOfBirth]: Date;
  [PersonFormFields.Country]: string;
}
