import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EChartsOption, SeriesOption } from 'echarts';

@Component({
  selector: 'app-wins-per-country',
  templateUrl: './wins-per-country.component.html',
  styleUrls: ['./wins-per-country.component.css']
})
export class WinsPerCountryComponent implements OnInit{
  loading = true;

  private baseUrl = 'https://localhost:7074/api/';
  chartOption: EChartsOption = {
    title: {
      text: 'Championship wins per Country',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Wins From',
        type: 'pie',
        radius: '50%',
        data: [],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWinsPerCountry();
  }

  getWinsPerCountry() {
    this.http.get<any[]>(this.baseUrl + 'NationalityWinCount').subscribe((data) => {
      const formattedData = data.map((item) => {
        return { value: item.wins, name: item.nationality };
      });

      (this.chartOption.series as SeriesOption[])[0].data = formattedData;
      this.loading = false;
    });
  }

}
