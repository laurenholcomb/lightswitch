import { Component, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-onoff',
  animations: [
    trigger('changeOnOff', [
      state('initial', style({
        backgroundImage: 'url(../assets/images/on.png)',
        width: '1000px',
        height: '700px'
      })),
      state('final', style({
        backgroundImage: 'url(../assets/images/off.png)',
        width: '1000px',
        height: '700px'
      })),
      transition('initial=>final', animate('100ms')),
      transition('final=>initial', animate('100ms'))
    ]),
  ],
  templateUrl: './onoff.component.html',
  styleUrls: ['./onoff.component.css']
})

export class OnoffComponent {

currentState = 'initial';
changeState() {
  this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
} 
}
