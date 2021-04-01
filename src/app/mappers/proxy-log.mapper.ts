import {LogItem} from '../models/log-item.model';

const VERSION_ID_REGEXP = /[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}/i;
const LOG_MSG_REGEXP = /\] (((?!\]).)*)\\n"/i;
const LOG_TYPE_REGEXP = /\[.\]/i;
const TIME_REGEXP = /"time":"(.*)"/i;
const FULL_REGEXP = /^\[(((?!\]).)*)\].*\[(.)\].*\] (.*)/i;

export class ProxyLogMapper {

  static map(raw: string): LogItem {
    const idMatch = raw.match(VERSION_ID_REGEXP);
    const id = idMatch && idMatch.length > 0 ? idMatch[0] : 'P';

    const messageMatch = raw.match(LOG_MSG_REGEXP);
    const message = messageMatch && messageMatch.length > 1 ? messageMatch[1] : '';

    const timeMatch = raw.match(TIME_REGEXP);
    const time = timeMatch && timeMatch.length > 1 ? timeMatch[1] : '';

    const typeMatch = raw.match(LOG_TYPE_REGEXP);
    const type = typeMatch ? typeMatch[0].slice(1, -1) : '';

    return ProxyLogMapper.buildLogItem(id, message, time, type, raw);
  }

  static mapWithDate(date: Date, raw: string): LogItem {
    const idMatch = raw.match(VERSION_ID_REGEXP);
    const id = idMatch && idMatch.length > 0 ? idMatch[0] : 'P';
    const fullMatch = raw.match(FULL_REGEXP);

    if (fullMatch && fullMatch.length > 4) {
      const time = date.toDateString() + ' ' + fullMatch[1];
      const type = fullMatch[3];
      const message = fullMatch[4];
      return ProxyLogMapper.buildLogItem(id, message, time, type, raw);
    }
  }

  private static buildLogItem(id: string, message: string, time: string, type: string, raw: string): LogItem {
    return {
      id, time: new Date(time).getTime(), type, message, raw, src: 'c'
    };
  }
}
