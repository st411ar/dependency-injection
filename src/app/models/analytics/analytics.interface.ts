import { MetricModel } from './metric.model';

export interface IAnalytics {
	recordEvent(metric: MetricModel): void;
}