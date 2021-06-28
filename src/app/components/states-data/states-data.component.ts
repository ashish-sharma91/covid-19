import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-states-data',
  templateUrl: './states-data.component.html',
  styleUrls: ['./states-data.component.scss']
})
export class StatesDataComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    Object.keys(this.data).forEach(state => {
      this.data[state].expanded = false;
      this.data[state].confirmed = this.getStateTotal(this.data[state].districtData);
    });
  }

  getStateTotal(districtData): number {
    let totalConfirmed = 0;
    Object.keys(districtData).forEach(district => {
      totalConfirmed += districtData[district].confirmed;
    });
    return totalConfirmed;
  }
}
