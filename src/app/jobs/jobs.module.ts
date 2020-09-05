import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SharedModule } from '../shared/shared.module';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsService } from './jobs.service';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [JobsComponent, JobsListComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    MarkdownModule.forRoot(),
  ],
  providers: [
    JobsService
  ]
})
export class JobsModule { }
