import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hike } from './hike';

@Component({
    moduleId: module.id,
    selector: 'hike-summary',
    templateUrl: 'hike-summary.component.html'
})

export class HikeSummaryComponent{
    @Input() rando: Hike;

    @Output() addHikeAsFavorite = new EventEmitter<Hike>();

    toggleAsTodoHike(isAdded:any){
        console.log(isAdded);
        if (isAdded){
            this.addHikeAsFavorite.emit(this.rando);
        }
    }
}