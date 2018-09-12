import { Injectable } from '@angular/core';

import { IAnalytics } from '../models/analytics/analytics.interface';
import { MetricModel } from '../models/analytics/metric.model';


@Injectable()
export class AnalyticsService {

	constructor(private analytics: IAnalytics) {}

	record(metric: MetricModel): void {
		this.analytics.recordEvent(metric);
	}
}
