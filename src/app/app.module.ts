import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDataComponent } from './components/country-data/country-data.component';
import { IndianNumberPipe } from './pipes/indian-number.pipe';
import { StatesDataComponent } from './components/states-data/states-data.component';
import { StateTreeMapComponent } from './components/state-tree-map/state-tree-map.component';
import { HistoryChartComponent } from './components/history-chart/history-chart.component';
import { DateRangeSelectorComponent } from './components/date-range-selector/date-range-selector.component';


const COMPONENTS = [
  CountryDataComponent,
  StatesDataComponent,
  StateTreeMapComponent,
  HistoryChartComponent,
  DateRangeSelectorComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    IndianNumberPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [...COMPONENTS],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
