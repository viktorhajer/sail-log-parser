import {LogItem} from '../models/log-item.model';

const VERSION_ID_REGEXP = /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/i;
const FULL_REGEXP = /\[Time\: (((?!\]).)*)\].*\[Type\: (((?!\]).)*)\] \[Message\: (((?!\]).)*)\].*/i;

export class NestLogMapper {

  static map(raw: string): LogItem {
    const idMatch = raw.match(VERSION_ID_REGEXP);
    const id = idMatch && idMatch.length > 0 ? idMatch[0] : 'N';
    const fullMatch = raw.match(FULL_REGEXP);

    if (fullMatch && fullMatch.length > 6) {
      const time = fullMatch[1];
      const type = fullMatch[3] === 'Info' ? 'I' : fullMatch[3] === 'Error' ? 'E' : 'W';
      const message = fullMatch[5];
      return {
        id, message, time: new Date(time).getTime(), type, raw, src: 'n'
      };
    }
  }
}
