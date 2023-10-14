import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EChartsOption, SeriesOption } from 'echarts';

@Component({
  selector: 'app-age-distribution',
  templateUrl: './age-distribution.component.html',
  styleUrls: ['./age-distribution.component.css']
})
export class AgeDistributionComponent implements OnInit {
  loading = true;

  private baseUrl = 'https://localhost:7074/api/';

  chartOption: EChartsOption = {
    title: {
      text: 'Age Distribution of F1 Championship Winners',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: ['18-25', '26-30', '31-35', '36-40']
    },
    yAxis: {
      type: 'value',
      name: 'Number of Winners'
    },
    series: [
      {
        name: 'Age Distribution',
        type: 'bar',
        data: []
      }
    ]
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAgeDistributionData();
  }

  getAgeDistributionData() {
    this.http.get<any[]>(this.baseUrl + 'WinningAge').subscribe((data) => {
      const ageGroups = [0, 0, 0, 0];

      data.forEach((item) => {
        const age = item.age;

        if (age >= 18 && age <= 25) {
          ageGroups[0]++;
        } else if (age >= 26 && age <= 30) {
          ageGroups[1]++;
        } else if (age >= 31 && age <= 35) {
          ageGroups[2]++;
        } else{
          ageGroups[3]++;
        }
      });

      (this.chartOption.series as SeriesOption[])[0].data = ageGroups;
      this.loading = false;
    });
  }
}