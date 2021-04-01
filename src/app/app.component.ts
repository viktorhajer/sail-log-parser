import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NestLogMapper} from './mappers/nest-log.mapper';
import {LogItem} from './models/log-item.model';
import {DateMapper} from './mappers/date.mapper';
import {ProxyLogMapper} from './mappers/proxy-log.mapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  logs: LogItem[] = [];
  filteredLogs: LogItem[] = [];
  versionIds: string[] = [];

  searchValue = '';
  selectedVersionId = '';
  selectedType = [
    {label: 'Info', value: 'I', checked: true},
    {label: 'Warning', value: 'W', checked: true},
    {label: 'Error', value: 'E', checked: true}
  ];
  selectedStartDate = 0;
  selectedEndDate = 0;
  minDate = 0;
  maxDate = 0;

  constructor(private chr: ChangeDetectorRef) {
    this.chr.detach();
  }

  ngOnInit() {
    this.chr.detectChanges();
  }

  changedFilter(event?) {
    if (!event || event.key === 'Enter') {
      this.filteredLogs = this.logs.filter(v => {
        return (this.selectedVersionId ? v.id === this.selectedVersionId : true)
          && ((this.selectedType[0].checked ? v.type === this.selectedType[0].value : false)
            || (this.selectedType[1].checked ? v.type === this.selectedType[1].value : false)
            || (this.selectedType[2].checked ? v.type === this.selectedType[2].value : false))
          && (v.time >= this.selectedStartDate)
          && (v.time <= this.selectedEndDate)
          && (v.raw.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1);
      });
      this.chr.detectChanges();
    }

  }

  clearFilters() {
    this.filteredLogs = this.logs;
    this.selectedType.forEach(t => t.checked = true);
    this.selectedVersionId = '';
    this.searchValue = '';
    this.selectedStartDate = this.minDate;
    this.selectedEndDate = this.maxDate;
    this.chr.detectChanges();
  }

  formatDate(dateTime: number): string {
    return DateMapper.format(dateTime);
  }

  clearLogs() {
    this.logs = [];
    this.initFilters();
  }

  openBackendLog(e) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.parseBackend(fileReader.result as string);
      e.target.value = '';
    };
    fileReader.readAsText(e.target.files[0]);
  }

  openProxyLog(e) {
    const fileReader = new FileReader();
    let date;
    const dateMatch = e.target.files[0].name.match(/.*([0-9]{4}-[0-9]{2}-[0-9]{2}).*/i);
    if (dateMatch && dateMatch.length > 1) {
      date = new Date(dateMatch[1]);
    }
    fileReader.onload = () => {
      this.parseProxy(fileReader.result as string, date);
      e.target.value = '';
    };
    fileReader.readAsText(e.target.files[0]);
  }

  getType(typeChar = 'I'): string {
    return typeChar === 'I' ? 'Info' : typeChar === 'E' ? 'Error' : 'Warning';
  }

  private toggleInfo(index: number) {
    document.getElementsByClassName(`outInfo_${index}`)[0].classList.toggle('hidden');
    this.chr.detectChanges();
  }

  private initFilters() {
    if (this.logs.length) {
      this.versionIds = Array.from(new Set(this.logs.map(v => v.id)));
      this.maxDate = this.logs[this.logs.length - 1].time;
      this.minDate = this.logs[0].time;
    } else {
      this.versionIds = [];
      this.maxDate = 0;
      this.minDate = 0;
    }
    this.clearFilters();
  }

  private parseBackend(input = '') {
    try {
      input.split('\n').forEach(line => {
        const log = NestLogMapper.map(line);
        if (log && log.message) {
          this.logs.push(log);
        }
      });
      this.initFilters();
    } catch (e) {
      this.handleError(e);
    }
  }

  private parseProxy(input = '', date?: Date) {
    try {
      const ignore = ['MemUtils', 'in progress: 0', 'DataBufferingWorkerBase', 'ParquetFileWriter', 'AnchorProxy::run: VSize'];
      let previousDate: number;
      const hour = 60 * 60 * 1000;
      input.split('\n').filter(line => line && line.trim() && !ignore.some(ign => line.indexOf(ign) !== -1)).forEach(line => {
        const log = date ? ProxyLogMapper.mapWithDate(date, line) : ProxyLogMapper.map(line);
        if (log) {
          if (previousDate && previousDate > log.time) {
            log.time += 24 * hour;
            date.setDate(date.getDate() + 1);
          } else {
            previousDate = log.time;
          }
          this.logs.push(log);
        }
      });
      this.logs.sort((a, b) => a.time - b.time);
      this.initFilters();
    } catch (e) {
      this.handleError(e);
    }
  }

  private handleError(e) {
    console.error(e);
  }
}
