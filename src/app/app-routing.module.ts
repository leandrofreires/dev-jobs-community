import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule), pathMatch: 'full'},
  { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(mod => mod.JobsModule), pathMatch: 'full'},
  { path: 'about', loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule), pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
