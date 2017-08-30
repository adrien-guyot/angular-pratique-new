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

    droppedLat: number;
    droppedLng: number;
    markerWasDropped: boolean;

    onCoordMarkerDropped(event: any){
        this.markerWasDropped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);


    }
}
