import SeriesModule from "src/utils/modules/series";
import { IChartData } from "../Charts/MockChart";

export const mockObservationData1 = [
    { date: '2023-01', value: '100' },
    { date: '2023-02', value: '150' },
    { date: '2023-03', value: '120' },
    { date: '2023-04', value: '180' },
    { date: '2023-05', value: '170' },
    { date: '2023-06', value: '120' },
    { date: '2023-07', value: '140' },
    { date: '2023-08', value: '210' },
    { date: '2023-09', value: '180' },
    { date: '2023-10', value: '140' },
    { date: '2023-11', value: '150' },
    { date: '2023-12', value: '100' },
  ]

  export const mockObservationData2 = [
    { date: '2023-01', value: '100' },
    { date: '2023-02', value: '250' },
    { date: '2023-03', value: '400' },
    { date: '2023-04', value: '150' },
    { date: '2023-05', value: '500' },
    { date: '2023-06', value: '300' },
    { date: '2023-07', value: '600' },
    { date: '2023-08', value: '200' },
    { date: '2023-09', value: '700' },
    { date: '2023-10', value: '100' },
    { date: '2023-11', value: '450' },
    { date: '2023-12', value: '800' },
    { date: '2023-01', value: '100' },
  ];
  

  export const mockObservationData3 = [
    { date: '2023-01', value: '50' },
  { date: '2023-02', value: '100' },
  { date: '2023-03', value: '200' },
  { date: '2023-04', value: '300' },
  { date: '2023-05', value: '400' },
  { date: '2023-06', value: '500' },
  { date: '2023-07', value: '600' },
  { date: '2023-08', value: '700' },
  { date: '2023-09', value: '800' },
  { date: '2023-10', value: '900' },
  { date: '2023-11', value: '1000' },
  { date: '2023-12', value: '1100' },
 
  ];
  

  export const mockObservationData4 = [
    { date: '2023-01', value: '400' },
    { date: '2023-02', value: '420' },
    { date: '2023-03', value: '390' },
    { date: '2023-04', value: '450' },
    { date: '2023-05', value: '430' },
    { date: '2023-06', value: '380' },
    { date: '2023-07', value: '400' },
    { date: '2023-08', value: '470' },
    { date: '2023-09', value: '440' },
    { date: '2023-10', value: '400' },
    { date: '2023-11', value: '420' },
    { date: '2023-12', value: '390' },
  ];
  
  
  
 export  const mockLineSettings: SeriesModule.IChartSettings = {
    title: 'Annual Revenue',
    chartType: 'line', // or 'bar'
    lineColor: '#FF80AA',
    lineStyle: 'solid', // 'dotted' | 'dashed' | 'solid'
    yAxisLabel: 'Revenue (in USD)',
  };

  export  const mockBarSettings: SeriesModule.IChartSettings = {
    title: 'Annual Revenue',
    chartType: 'bar', // or 'bar'
    lineColor: '#FF80AA',
    lineStyle: 'solid', // 'dotted' | 'dashed' | 'solid'
    yAxisLabel: 'Revenue (in USD)',
  };