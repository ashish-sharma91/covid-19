import { Component } from '@angular/core';

import { GetDataService } from "../services/get-data.service";
import { CountryCases } from "../model/country-cases.model";
import * as moment from 'moment';
import { DateRange } from 'src/model/date-range.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  countryData: CountryCases;
  statesData: any;
  history: any[] = [];
  filteredHistory: any[] = [];
  dates: DateRange[] = [];
  selectedDateRange: DateRange;
  historyLoading: boolean = false;

  constructor (private getDataService: GetDataService) {
    this.createDateArray();
    this.getCountryData();
    this.getStatesData();
    this.getHistoryData();
  }

  ngOnInit () {
    if (localStorage.getItem('historyData')) {
      this.history = JSON.parse(localStorage.getItem('historyData'));
      this.filteredHistory = JSON.parse(localStorage.getItem('historyData'));
    }
  }


  createDateArray () {
    let startOfThisWeek = moment().toISOString();
    let labels = ['This Week', '1 Week Back From Now', '2 Week Back From Now', '3 Week Back From Now'];
    let obj = {
      start: moment(startOfThisWeek).startOf('isoWeek').subtract(2, 'years').toISOString(),
      end: moment(startOfThisWeek).endOf('isoWeek').toISOString(),
      label: 'Till date'
    };
    this.dates.push(obj);
    labels.forEach((label, i) => {
      let obj = {
        start: moment(startOfThisWeek).startOf('isoWeek').subtract(i, 'weeks').toISOString(),
        end: moment(startOfThisWeek).endOf('isoWeek').subtract(i, 'weeks').subtract(1, 'days').toISOString(),
        label: label
      };
      this.dates.push(obj);
    });
  }

  getCountryData () {
    let country = 'India';
    this.getDataService.getCountryData$(country).subscribe(res => {
      this.countryData = res;
    });
  }

  getStatesData () {
    this.getDataService.getStatesData$().subscribe(res => {
      this.statesData = res;
    });
  }

  getHistoryData () {
    this.historyLoading = true;
    this.getDataService.getHistoryData$().subscribe(res => {
      res.forEach(el => {
        el.lastUpdatedAtApify = moment(el.lastUpdatedAtApify).format('YYYY-MM-DD');
      });
      localStorage.setItem('historyData', JSON.stringify(res));
      this.history = res;
      this.filteredHistory = res;
      this.filterHistoryData();
      this.historyLoading = false;
    });
  }

  onDateRangeSelect (e: DateRange) {
    this.selectedDateRange = e;
    this.filterHistoryData();
  }

  filterHistoryData () {
    let start = this.selectedDateRange.start;
    let end = this.selectedDateRange.end;
    this.filteredHistory = this.history.filter(el => this.isBetweenDates(el.lastUpdatedAtApify, start, end));
  }

  isBetweenDates (date: string, start: string, end: string): boolean {
    let startDiff = moment(date, 'YYYY-MM-DD').diff(moment(start), 'seconds');
    let endDiff = moment(end).diff(moment(date, 'YYYY-MM-DD'), 'seconds');
    if (startDiff >= 0 && endDiff >= 0) {
      return true;
    }
    return false;
  }
}
