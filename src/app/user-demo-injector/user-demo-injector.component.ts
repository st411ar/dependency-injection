import { Component, OnInit, ReflectiveInjector } from '@angular/core';

import { UserService } from '../services/user.service';


@Component({
	selector: 'app-user-demo-injector',
	templateUrl: './user-demo-injector.component.html'
})
export class UserDemoInjectorComponent implements OnInit {
	userName: string;
	userService: UserService;

	constructor() {
		const inj: any = ReflectiveInjector.resolveAndCreate([UserService]);
		this.userService = inj.get(UserService);
	}

	ngOnInit() {}


	signIn(): void {
		this.userService.setUser({
			name: 'Nate Murray'
		});
		this.userName = this.userService.getUser().name;
		console.log('User name is: ', this.userName);
	}

}
