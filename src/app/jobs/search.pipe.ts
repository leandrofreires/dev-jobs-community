import { Pipe, PipeTransform } from '@angular/core';
import { Issue } from './issue';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(issues: Issue[], searchText: string): Issue[] {
    if (!issues) {
      return [];
    }
    if (!searchText) {
      return issues;
    }
    let skills = searchText.split(',').map((s) => s.trim());
    let filtered: Issue[] = [];
    skills.forEach((skill) => {
      let regex = new RegExp(skill, 'ig');
      filtered = filtered.concat(issues.filter((issue) => {
        return issue.title.match(regex) || issue.body.match(regex);
      }));
    });
    return filtered;
  }
}
