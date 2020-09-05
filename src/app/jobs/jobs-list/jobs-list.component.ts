import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { async } from 'rxjs';
import { Issue } from '../issue';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  constructor(private jobsService: JobsService) { }

  issues: Issue[] = [];

  ngOnInit(): void {
    // this.jobsService.repos.forEach(async (repo) => {

    //   let issueResponse = await this.jobsService.getIssues(repo).toPromise();

    //   this.issues = this.issues.concat(issueResponse);
      
    // });
  }

}
