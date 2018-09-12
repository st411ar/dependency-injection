import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExampleModel } from '../../models/example.model';


@Component({
	selector: 'app-item',
	templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {
	@Input() item: ExampleModel;

	constructor(
		private location: Location,
		private router: Router
	) {}

	ngOnInit() {}


	isActive(): boolean {
		let itemPath: string = this.item.path;
		if (itemPath !== '') {
			itemPath = `/${itemPath}`;
		}
		return itemPath === this.location.path();
	}

}
