import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HikeListComponent } from './hike-list.component';
import { HikeDetailsComponent } from './hike-details.component';
import { HikeService } from './hike.service';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [HikeListComponent, HikeDetailsComponent],
    exports: [HikeListComponent],
    providers: [HikeService]
})

export class HikeModule { }