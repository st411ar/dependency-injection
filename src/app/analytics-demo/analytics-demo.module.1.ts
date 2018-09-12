import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsDemoComponent } from '../analytics-demo/analytics-demo.component';
import { AnalyticsService } from '../services/analytics.service';
import { IAnalytics } from '../models/analytics/analytics.interface';
import { MetricModel } from '../models/analytics/metric.model';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnalyticsDemoComponent],
  providers: [
  	{
  		provide: AnalyticsService,
  		useFactory() {
  			const loggingAnalytics: IAnalytics = {
  				recordEvent: (metric: MetricModel): void => {
  					console.log('The metric is: ', metric);
  				}
  			};

  			return new AnalyticsService(loggingAnalytics);
  		}
  	}
  ]
})
export class AnalyticsDemoModule { }
