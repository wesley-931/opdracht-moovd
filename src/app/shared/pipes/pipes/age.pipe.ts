import {Pipe, PipeTransform} from '@angular/core';
import * as dayjs from 'dayjs';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value?: string): string {
    if (!value) {
      return '-';
    }

    return dayjs().diff(dayjs(value), 'year', false).toString();
  }
}
