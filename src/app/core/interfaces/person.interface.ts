import {PersonFormFields} from '@core/enums';

export interface Person {
  [PersonFormFields.Identifier]?: number;
  [PersonFormFields.Name]: string;
  [PersonFormFields.Email]: string;
  [PersonFormFields.Avatar]: number;
  [PersonFormFields.DateOfBirth]: string;
  [PersonFormFields.Country]: string;
}
