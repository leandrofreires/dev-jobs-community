import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { JobsService, Repository } from '../jobs.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {

  @Input() search: string;

  constructor(private jobsService: JobsService ) { }

  issues: Issue[] = [];

  repositories: Repository[] = this.jobsService.repos;

  ngOnInit(): void {
    this.loadData();
  }
  async loadData() {
    const promises = this.repositories.map(async (repo, idx) => {
      let issueResponse = await this.jobsService.getIssues(repo).toPromise();
      this.issues = this.issues.concat(issueResponse);
    });
    await Promise.all(promises);
    this.sort()
    this.jobsService.loadDone.emit(true)
  }

  sort() {
    this.issues.sort(function(a,b){
      var keyA = new Date(a.created_at), keyB = new Date(b.created_at);
      if(keyA > keyB) return -1;
      if(keyA < keyB) return 1;
    });
  }
}
