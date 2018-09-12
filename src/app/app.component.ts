import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { ExampleModel } from './models/example.model';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(
		private router: Router,
		@Inject('Examples') public examples: ExampleModel[]
	) {}
}
