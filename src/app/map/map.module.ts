import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapComponent } from './map.component';

import { MapService } from './map.service';

@NgModule({
    imports:[
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAXmtvozeZD67t1g5CWqDYxZUrk7rz0X00'
        })
    ],
    providers: [ MapService ],
    declarations: [ MapComponent ],
})

export class MapModule{}