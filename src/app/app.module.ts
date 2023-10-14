import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxEchartsModule } from 'ngx-echarts';

import { HttpClientModule } from '@angular/common/http';
import { YearPointsComponent } from './year-points/year-points.component';
import { WinsPerCountryComponent } from './wins-per-country/wins-per-country.component';
import { AgeDistributionComponent } from './age-distribution/age-distribution.component';

@NgModule({
  declarations: [
    AppComponent,
    YearPointsComponent,
    WinsPerCountryComponent,
    AgeDistributionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
