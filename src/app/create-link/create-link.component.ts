import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'hn-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.css']
})
export class CreateLinkComponent implements OnInit {
  description: string = '';
  url: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  createLink() {
    // ... you'll implement this in a bit
  }
}
