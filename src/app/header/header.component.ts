import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgNavigatorShareService } from 'ng-navigator-share';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavEvent = new EventEmitter();
  constructor(private ngNavigatorShareService: NgNavigatorShareService) { }

  ngOnInit(): void {
  }

  toogle(){
    this.sidenavEvent.emit()
  }
  share(){
    this.ngNavigatorShareService.share({
      title: 'Dev Jobs Community',
      text: 'Dev Jobs Community is a helper for devs looking for opportunities',
      url: 'http://dev-jobs-community.web.app/'
    })
  }

}
