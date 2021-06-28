import { Component, Input, OnInit } from '@angular/core';
import { CountryCases } from "../../../model/country-cases.model";

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.scss']
})
export class CountryDataComponent implements OnInit {

  @Input() data: CountryCases;

  constructor() { }

  ngOnInit(): void {
  }

}
