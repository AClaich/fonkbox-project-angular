import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Staff } from '../main/main.component';

@Component({
  selector: 'app-mobile-container',
  templateUrl: './mobile-container.component.html',
  styleUrls: ['./mobile-container.component.scss']
})
export class MobileContainerComponent implements OnInit {

  @Input() staffMember: Staff[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
