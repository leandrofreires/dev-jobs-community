import { Component, Input, OnInit } from '@angular/core';
import { JobsService, Repository } from '../jobs.service';
import { Issue } from '../issue';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  @Input() search: string;

  constructor(private jobsService: JobsService) { }

  issues: Issue[] = [];

  repositories: Repository[] = this.jobsService.repos;

  ngOnInit(): void {
    this.loadData();
  }
  async loadData() {
    let issueResponse: Issue[] = []
    const resultPrommisses = this.repositories.map((repo) => {
      return this.jobsService.getIssues(repo);
    });
    var response = forkJoin(resultPrommisses);
    response.subscribe({
      next: value => value.map(e => issueResponse = issueResponse.concat(e)),
      complete: () => {
        this.sort(issueResponse);
        this.issues = issueResponse;
        this.jobsService.loadDone.emit(true)
      }
    });


  }

  sort(issues: Issue[]) {
    issues.sort(function (a, b) {
      var keyA = new Date(a.created_at), keyB = new Date(b.created_at);
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
    });
  }
}
