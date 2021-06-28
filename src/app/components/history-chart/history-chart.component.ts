import { Component, Input, NgZone, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent implements OnInit {

  chartData: any[] = [];
  chart: any;
  updateData: (chartData: any[]) => void;

  @Input() set data(value: any[]) {
    this.chartData = value;
    if (this.chart) {
      this.updateData(value);
    } else {
      this.initializeChart(value);
    }
  }


  constructor(private zone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  initializeChart(chartData) {
    this.zone.runOutsideAngular(() => {


      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      this.chart = am4core.create("historyChart", am4charts.XYChart);

      // Add data
      this.updateData = function (chartData) {
        this.chart.data = chartData;
      };

      this.chart.data = chartData;

      // Create axes
      var dateAxis = this.chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 50;

      var valueAxis = this.chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = this.chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "totalCases";
      series.dataFields.dateX = "lastUpdatedAtApify";
      series.strokeWidth = 2;
      series.minBulletDistance = 10;
      series.tooltipText = "[bold]Date{date.formatDate()}:[/] {lastUpdatedAtApify}\n[bold]Total{date.formatDate()}:[/] {totalCases}\n [bold]Deaths{previousDate.formatDate()}:[/] {deaths}";
      series.tooltip.pointerOrientation = "vertical";

      // Create series
      var series2 = this.chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "deaths";
      series2.dataFields.dateX = "lastUpdatedAtApify";
      series2.strokeWidth = 2;
      series2.strokeDasharray = "3,4";
      series2.propertyFields.stroke = "#ff0000";
      series2.stroke = series.stroke;

      // Add cursor
      this.chart.cursor = new am4charts.XYCursor();
      this.chart.cursor.xAxis = dateAxis;
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
