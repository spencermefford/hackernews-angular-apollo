import {Component, OnInit} from '@angular/core';
import {Link} from '../types';

@Component({
  selector: 'hn-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  linksToRender: Link[] = [{
    id: '1',
    description: 'The Coolest GraphQL Backend 😎',
    url: 'https://www.graph.cool',
    createdAt: 'hello'
  }, {
    id: '2',
    description: 'The Best GraphQL Client',
    url: 'http://dev.apollodata.com/',
    createdAt: 'hello'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
