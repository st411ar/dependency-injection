import { Component, Input, OnInit } from '@angular/core';

import { ExampleModel } from '../models/example.model';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
	@Input() items: ExampleModel[];

	constructor() {}

	ngOnInit() {}

}
