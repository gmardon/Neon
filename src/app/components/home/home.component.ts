import { Component, OnInit } from '@angular/core';
import { Bubble } from 'app/bubble';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private bubbles: Bubble[] = [];
  constructor() { }

  ngOnInit() {
    let selectedBubbles = window.document.querySelectorAll('.bubble');
    for (let i = 0; selectedBubbles[i]; i++) {
      console.log('create bubble..');
      let bubble: Bubble = new Bubble(selectedBubbles[i] as HTMLElement);
      this.bubbles.push(bubble);
      console.log(bubble);
    }
    window.dispatchEvent(new Event('resize'));
  }
}
