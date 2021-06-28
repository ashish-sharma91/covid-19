import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateRange } from "../../../model/date-range.model";

@Component({
  selector: 'app-date-range-selector',
  templateUrl: './date-range-selector.component.html',
  styleUrls: ['./date-range-selector.component.scss']
})
export class DateRangeSelectorComponent implements OnInit {

  @Output() dateRangeSelect: EventEmitter<DateRange> = new EventEmitter<DateRange>();

  @Input() dates: DateRange[] = [];
  selectedWeekIndex: number = 0;

  constructor () { }

  ngOnInit (): void {
  }

  onDateSelect (): void {
    this.dateRangeSelect.emit(this.dates[this.selectedWeekIndex]);
  }

}
