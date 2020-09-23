import { Component, OnInit } from '@angular/core';
import { Repository, JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  repositories: Repository[];

  constructor(private jobsService: JobsService) { }

  ngOnInit(): void {
    this.repositories =  this.jobsService.repos;
  }

}
