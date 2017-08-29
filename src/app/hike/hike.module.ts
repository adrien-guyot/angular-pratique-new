import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HikeListComponent } from './hike-list.component';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeSummaryComponent } from './hike-summary.component';
import { HikeService } from './hike.service';
import { HikeFilterPipe } from './hike-filter.pipe';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [
        HikeListComponent, 
        HikeDetailsComponent, 
        HikeFilterPipe,
        HikeSummaryComponent
    ],
    exports: [HikeListComponent],
    providers: [HikeService]
})

export class HikeModule { }