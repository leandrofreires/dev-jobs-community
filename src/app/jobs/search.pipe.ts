import { Pipe, PipeTransform } from '@angular/core';
import { Issue } from './issue';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(issues:  Issue[], searchText: string): Issue[] {
    if(!issues){
      return [];
    }
    if(!searchText){
      return issues;
    }
    let regex = new RegExp(searchText, 'ig');
    return issues.filter( issue => {
      return issue.title.match(regex) || issue.body.match(regex)
    })
  }

}
