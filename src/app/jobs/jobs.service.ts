import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Issue, Label } from './issue';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  @Output() loadDone = new EventEmitter<boolean>();
  repos: Repository[] = [
    { name: "vagas", fullName: "qa-brasil/vagas", owner: "qa-brasil"},
    { name: "vagas", fullName: "uxbrasil/vagas", owner: "uxbrasil"},
    { name: "vagas", fullName: "frontendbr/vagas", owner: "frontendbr"},
    { name: "vagas", fullName: "backend-br/vagas", owner: "backend-br"},
  ];
  constructor(private http: HttpClient) { }

  getIssuesUrl(repo: Repository): string {
    return `${environment.apiUrl}repos/${repo.fullName}/issues`;
  }

  getIssues(repo: Repository): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.getIssuesUrl(repo));
  }
}
export interface Repository {
  name: string;
  owner: string;
  fullName: string
}
interface Job {
  url: string;
  title: string;
  labels: Label[];
  created_at: Date;
}
