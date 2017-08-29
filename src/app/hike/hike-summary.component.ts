import { Component, Input } from '@angular/core';

import { Hike } from './hike';

@Component({
    moduleId: module.id,
    selector: 'hike-summary',
    templateUrl: 'hike-summary.component.html'
})

export class HikeSummaryComponent{
    @Input() rando: Hike;
}