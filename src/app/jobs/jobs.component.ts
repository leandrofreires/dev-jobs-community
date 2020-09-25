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
    this.jobsService.loadDone.subscribe((event: boolean) => {
      this.issueDone = event;
      if(this.issueDone) {
        this._snackBar.open("All repositories are loaded","done",{
          duration:5000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom'
        })
      }
    })
  }
  onKey(value: string) {
    this.search = value;
  }

}
