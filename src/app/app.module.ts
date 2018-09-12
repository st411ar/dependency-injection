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

import { AnalyticsDemoModule } from './analytics-demo/analytics-demo.module';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';


export const examples: ExampleModel[] = [ 
	{ label: 'Intro', path: '' },
	{ label: 'Injector', path: 'injector' },
	{ label: 'useClass (UserService)', path: 'use-class' },
	{ label: 'factory (AnalyticsService)', path: 'factory' }
];

const routes: Routes = [
	{ path: '', component: IntroComponent, pathMatch: 'full' },
	{ path: 'injector', component: UserDemoInjectorComponent, pathMatch: 'full' },
	{ path: 'use-class', component: UserDemoComponent, pathMatch: 'full' },
	{ path: 'factory', component: AnalyticsDemoComponent, pathMatch: 'full' },
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
		AnalyticsDemoModule
	],
	providers: [
		{ provide: 'Examples', useValue: examples }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
