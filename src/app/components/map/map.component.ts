import { Component, OnInit, AfterViewInit } from '@angular/core';

// Services
import { MapService } from '../../services/map.service';

// Interface
import { IActivity } from '../../models/activity.model';

// Route
import { ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	activity: any;
	activityName: string;
	activityComments: string;
	activityDate: Date;
	activityDistance: number;
	gpx: any;

	// Inject service in constructor
	constructor(
		private mapService: MapService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		let id = this.route.snapshot.params['id'];
		this.activity = this.mapService.getActivity(id);
	}

	// After view init render map
	ngAfterViewInit(){
		let id = this.route.snapshot.params['id'];
		this.mapService.plotActivity(id);
		this.activityName = this.activity.name;
		this.activityComments = this.activity.comments;
		this.activityDate = this.activity.date;
		this.activityDistance = this.activity.distance;
		this.gpx = this.activity.gpxData;
	}

}
