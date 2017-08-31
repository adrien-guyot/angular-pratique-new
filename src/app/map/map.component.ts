import { Component, ApplicationRef } from '@angular/core';

import { MapService } from './map.service';

@Component({
    moduleId: module.id,
    selector: 'hike-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})

export class MapComponent {
    lat: number = 48.365800;
    lng: number = -2.880921;

    droppedLat: number;
    droppedLng: number;
    markerWasDropped: boolean;
    startingPoint: string = "La ville Ollivier, 35140 Mézières-sur-Couesnon, France";
    markers: marker[] = [];

    constructor(private _mapService: MapService, private _applicationRef: ApplicationRef) {

    }

    onCoordMarkerDropped(event: any) {
        this.markerWasDropped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);
    }

    geocode() {
        this._mapService
            .getLatLng(this.startingPoint)
            .subscribe(
            (data: any) => this.placeMarkerOnGeocodedPlace(data),
            (err: any) => console.error(err)
            )
    }

    placeMarkerOnGeocodedPlace(location: any){
        let marker = {
            lat: location.geometry.location.lat(),
            lng: location.geometry.location.lng(),
            title: "",
            draggable: true
        }

        this.markers.push(marker);
        this._applicationRef.tick();
    }
}

interface marker {
    lat: number;
    lng: number;
    title?: string; // title?: signifie que ce n'est pas une propriété obligatoire dans l'interface
    icon?: string;
    draggable: boolean;
}