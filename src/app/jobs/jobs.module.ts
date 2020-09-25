import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { SharedModule } from '../shared/shared.module';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobsService } from './jobs.service';
import { MarkdownModule } from 'ngx-markdown';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [JobsComponent, JobsListComponent, SearchPipe],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
  ],
  providers: [
    JobsService
  ]
})
export class JobsModule { }
