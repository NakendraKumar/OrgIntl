import { Component, OnInit } from '@angular/core';
//import * as d3 from 'd3';
/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// declare var d3: any;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  private chart: am4plugins_forceDirected.ForceDirectedTree;
  networkSeries: any;
  constructor() {}
  ngOnInit() {
    let chart = am4core.create(
      'graph',
      am4plugins_forceDirected.ForceDirectedTree
    );
    this.networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    chart.data = [
      {
        name: 'Core',
        children: [
          {
            name: 'First',
            children: [{ name: 'A1', value: 100 }, { name: 'A2', value: 60 }]
          },
          {
            name: 'Second',
            children: [{ name: 'B1', value: 135 }, { name: 'B2', value: 98 }]
          },
          {
            name: 'Third',
            children: [
              {
                name: 'C1',
                children: [
                  { name: 'EE1', value: 130 },
                  { name: 'EE2', value: 87 },
                  { name: 'EE3', value: 55 }
                ]
              },
              { name: 'C2', value: 148 },
              {
                name: 'C3',
                children: [
                  { name: 'CC1', value: 53 },
                  { name: 'CC2', value: 30 }
                ]
              },
              { name: 'C4', value: 26 }
            ]
          },
          {
            name: 'Fourth',
            children: [
              { name: 'D1', value: 415 },
              { name: 'D2', value: 148 },
              { name: 'D3', value: 89 }
            ]
          },
          {
            name: 'Fifth',
            children: [
              {
                name: 'E1',
                children: [
                  { name: 'EE1', value: 33 },
                  { name: 'EE2', value: 40 },
                  { name: 'EE3', value: 89 }
                ]
              },
              {
                name: 'E2',
                value: 148
              }
            ]
          }
        ]
      }
    ];

    this.networkSeries.dataFields.value = 'value';
    this.networkSeries.dataFields.name = 'name';
    this.networkSeries.dataFields.children = 'children';
    this.networkSeries.nodes.template.tooltipText = '{name}:{value}';
    this.networkSeries.nodes.template.fillOpacity = 1;
    this.networkSeries.manyBodyStrength = -20;
    this.networkSeries.links.template.strength = 0.8;
    this.networkSeries.minRadius = am4core.percent(2);

    this.networkSeries.nodes.template.label.text = '{name}';
    this.networkSeries.fontSize = 10;
    console.log('this.networkSeries ', this.networkSeries);
  }

  myFunction(ev: any) {
    console.log('clicked on ', ev.target);
  }
}
