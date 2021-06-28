import { Component, Input, NgZone, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-state-tree-map',
  templateUrl: './state-tree-map.component.html',
  styleUrls: ['./state-tree-map.component.scss']
})
export class StateTreeMapComponent implements OnInit {

  statesData: any;
  states: string[] = [];
  selectedState: string;
  chart: any;
  updateData: (chartData: any[]) => void;

  @Input() set data(value: any) {
    if (value) {
      this.statesData = value;
      this.states = Object.keys(value);
      this.selectedState = 'Gujarat';
      this.processChartData();
    }
  }


  constructor(private zone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  processChartData() {
    const chartData = { name: this.selectedState, children: [] };
    chartData.children = Object.keys(this.statesData[this.selectedState].districtData).reduce((acc1, district) => {
      const child = { name: district, value: this.statesData[this.selectedState].districtData[district].confirmed };
      acc1.push(child);
      return acc1;
    }, []);
    if (this.chart) {
      this.updateData([chartData]);
    } else {
      this.initializeChart([chartData]);
    }
  }

  initializeChart(chartData) {
    this.zone.runOutsideAngular(() => {

      this.chart = am4core.create("chartdiv", am4charts.TreeMap);
      this.chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

      this.updateData = function (chartData) {
        this.chart.data = chartData;
      };

      this.chart.data = chartData;

      this.chart.colors.step = 2;

      // define data fields
      this.chart.dataFields.value = "value";
      this.chart.dataFields.name = "name";
      this.chart.dataFields.children = "children";

      this.chart.zoomable = false;
      var bgColor = new am4core.InterfaceColorSet().getFor("background");

      // level 0 series template
      var level0SeriesTemplate = this.chart.seriesTemplates.create("0");
      var level0ColumnTemplate = level0SeriesTemplate.columns.template;

      level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
      level0ColumnTemplate.fillOpacity = 0;
      level0ColumnTemplate.strokeWidth = 4;
      level0ColumnTemplate.strokeOpacity = 0;

      // level 1 series template
      var level1SeriesTemplate = this.chart.seriesTemplates.create("1");
      var level1ColumnTemplate = level1SeriesTemplate.columns.template;

      level1SeriesTemplate.tooltip.animationDuration = 0;
      level1SeriesTemplate.strokeOpacity = 1;

      level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
      level1ColumnTemplate.fillOpacity = 1;
      level1ColumnTemplate.strokeWidth = 4;
      level1ColumnTemplate.stroke = bgColor;

      var bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
      bullet1.locationY = 0.5;
      bullet1.locationX = 0.5;
      bullet1.label.text = "{name}";
      bullet1.label.fill = am4core.color("#ffffff");

      this.chart.maxLevels = 2;
    });
  }


  destroyChart() {
    this.zone.runOutsideAngular(() => {
      if (this.chart && !this.chart._disposed) {
        this.chart.dispose();
      }
    });
  }

}
