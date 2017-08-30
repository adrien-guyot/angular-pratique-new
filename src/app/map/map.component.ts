import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'hike-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})

export class MapComponent{
    lat: number = 48.365800;
    lng: number = -2.880921;
}
