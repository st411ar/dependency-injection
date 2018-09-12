import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';

import { AnalyticsDemoComponent } from '../analytics-demo/analytics-demo.component';
import { AnalyticsService } from '../services/analytics.service';
import { IAnalytics } from '../models/analytics/analytics.interface';
import { MetricModel } from '../models/analytics/metric.model';


@NgModule({
	imports: [
		CommonModule,
		HttpModule
	],
	declarations: [AnalyticsDemoComponent],
	providers: [
		{ provide: 'API_URL', useValue: 'http://devserver.com' },
		{
			provide: AnalyticsService,
			deps: [ Http, 'API_URL' ],
			useFactory(http: Http, apiUrl: string) {
				const loggingAnalytics: IAnalytics = {
					recordEvent: (metric: MetricModel): void => {
						console.log('The metric is: ', metric);
						console.log('Sending to: ', apiUrl);
					}
				};

				return new AnalyticsService(loggingAnalytics);
			}
		}
	]
})
export class AnalyticsDemoModule { }
