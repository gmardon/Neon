import { Component, OnInit } from '@angular/core';
import { Bubble } from 'app/bubble';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let bubbles = window.document.querySelectorAll('.bubble')
    Array.from(bubbles).forEach(function (bubble) {
      new Bubble(bubble);
    })
  }
}
