import { Component, OnInit, SecurityContext } from '@angular/core';
import { JobsService, Repository } from '../jobs.service';
import { Issue } from '../issue';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  constructor(private jobsService: JobsService ) { }

  issues: Issue[] = [];

  repositories: Repository[] = this.jobsService.repos;

  ngOnInit(): void {
    this.repositories.forEach(async (repo) => {

      let issueResponse = await this.jobsService.getIssues(repo).toPromise();

      this.issues = this.issues.concat(issueResponse);
      
    });
  }
}
