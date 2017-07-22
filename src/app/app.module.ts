// Default Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Router
import { RouterModule } from '@angular/router';


// Components
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { MapComponent } from './components/map/map.component';


// Services
import { ActivityService } from './services/activity.service';
import { MapService } from './services/map.service';



// Modules 


const appRoutes = [
	{path: "runs", component: ActivityListComponent},
	{path: "run/:id", component: MapComponent},
	{path: "", redirectTo: "runs", pathMatch: "full"},
];


@NgModule({
	// Components
	declarations: [
		AppComponent,
		ActivityListComponent,
		MapComponent
	],
	// Modules
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		RouterModule.forRoot(appRoutes)
	],
	// Services
	providers: [
		ActivityService,
		MapService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
