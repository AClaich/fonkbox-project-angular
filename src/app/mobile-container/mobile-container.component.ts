import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-container',
  templateUrl: './mobile-container.component.html',
  styleUrls: ['./mobile-container.component.scss'],
  animations: [
    trigger('Opening', [
      transition(':enter', [
        query('.logo-img', [
          style({ opacity: 0, transform: 'translateY(20px)'}),
          stagger(50, [
            animate('500ms', style({ opacity: 1, transform: 'translateY(0px)'}))
          ]),
        ])
        // style({ opacity: 0, transform: 'translateY(20px)'}),
        // animate('500ms', style({ opacity: 1, transform: 'translateY(0px)'})),
      ])
    ])
  ]
})
export class MobileContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
