import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	user: any;

	constructor() {}


	setUser(newUser: any): void {
		this.user = newUser;
	}

	getUser(): any {
		return this.user;
	}
}
