import {DatePipe} from '@angular/common';

export class DateMapper {

  static map(dateString: string) {
    return new DatePipe('en-US').transform(dateString, 'M/d/yyyy, HH:mm:ss');
  }

  static format(dateTime: number) {
    return new DatePipe('en-US').transform(dateTime, 'M/d/yyyy, HH:mm:ss');
  }
}
