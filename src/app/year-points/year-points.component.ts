import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-year-points',
  templateUrl: './year-points.component.html',
  styleUrls: ['./year-points.component.css']
})
export class YearPointsComponent implements OnInit {
  loading = true;

  private baseUrl = 'https://localhost:7074/api/';
  chartOption: EChartsOption = {
    title: {
      text: 'Championship winner points 1990-2022',
      left: 'center',
    },
    xAxis: {
      type: 'category',
      data: [] as string[],
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const totalPoints = params[0].value as number;
        return `Total Points: ${totalPoints}`;
      },
    },
    series: [
      {
        type: 'line',
        smooth: true,
        data: [] as number[]
      },
    ],
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getYearPoints();
  }

  getYearPoints() {
    this.http.get<any[]>(this.baseUrl + 'YearPoint').subscribe((data) => {
      const years = data.map((item) => item.year);
      const points = data.map((item) => item.points);

      this.chartOption.xAxis = { type: 'category', data: years };
      this.chartOption.series = [{ type: 'line', smooth: true, data: points }];

      this.loading = false;
    });
  }
}
