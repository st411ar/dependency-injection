import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleModel } from './models/example.model';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemComponent } from './sidebar/item/item.component';
import { IntroComponent } from './intro/intro.component';
import { UserDemoInjectorComponent } from './user-demo-injector/user-demo-injector.component';

import { UserDemoModule } from './user-demo/user-demo.module';
import { UserDemoComponent } from './user-demo/user-demo.component';


export const examples: ExampleModel[] = [ 
	{ label: 'Intro', path: '' },
	{ label: 'Injector', path: 'injector' },
	{ label: 'useClass (UserService)', path: 'use-class' },
];

const routes: Routes = [
	{ path: '', component: IntroComponent, pathMatch: 'full' },
	{ path: 'injector', component: UserDemoInjectorComponent, pathMatch: 'full' },
	{ path: 'use-class', component: UserDemoComponent, pathMatch: 'full' },
];


@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		ItemComponent,
		IntroComponent,
		UserDemoInjectorComponent,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),

		UserDemoModule,
	],
	providers: [
		{ provide: 'Examples', useValue: examples }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
