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
    { name: "vagas", fullName: "androiddevbr/vagas", owner: "androiddevbr"},
    { name: "vagas", fullName: "CocoaHeadsBrasil/vagas", owner: "CocoaHeadsBrasil"},
    { name: "vagas", fullName: "phpdevbr/vagas", owner: "phpdevbr"},
    { name: "vagas", fullName: "vuejs-br/vagas", owner: "vuejs-br"},
    { name: "vagas", fullName: "Gommunity/vagas", owner: "Gommunity"},
    { name: "vagas", fullName: "flutterbr/vagas", owner: "flutterbr"},
    { name: "vagas", fullName: "react-brasil/vagas", owner: "react-brasil"},
    { name: "vagas", fullName: "dotnetdevbr/vagas", owner: "dotnetdevbr"},
    { name: "vagas", fullName: "rustdevbr/vagas", owner: "rustdevbr"},
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
