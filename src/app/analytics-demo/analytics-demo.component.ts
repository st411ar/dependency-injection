import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from '../services/analytics.service';


@Component({
	selector: 'app-analytics-demo',
	templateUrl: './analytics-demo.component.html'
})
export class AnalyticsDemoComponent implements OnInit {

	constructor(private analytics: AnalyticsService) {
		this.analytics.record({
			eventName: 'componentCreated',
			scope: 'AnalyticsDemoComponent'
		});
	}

	ngOnInit() {
		this.analytics.record({
			eventName: 'componentOnInit',
			scope: 'AnalyticsDemoComponent'
		});
	}


	buyButtonPressed(product: string): void {
		this.analytics.record({
			eventName: 'buyButtonPressed',
			scope: product
		});
	}

}
