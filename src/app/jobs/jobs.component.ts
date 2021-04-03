import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Repository, JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  repositories: Repository[];

  issueDone = false;

  search: string;

  constructor(private jobsService: JobsService,private  _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.repositories =  this.jobsService.repos;
    this._snackBar.open("Loading jobs from repos",null , {
      duration:5000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    })
    this.jobsService.loadDone.subscribe((event: boolean) => {
      console.log(event)
      this.issueDone = event;
      this._snackBar.open("All repositories are loaded",null ,{
        duration:5000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom'
      })
    })
  }
  onKey(value: string) {
    this.search = value;
  }

}
