import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Staff } from '../main/main.component';

@Component({
  selector: 'app-web-container',
  templateUrl: './web-container.component.html',
  styleUrls: ['./web-container.component.scss'],
  animations: [
    trigger('openCloseCard', [
      state('open', style({
        opacity: 1,
        filter: 'drop-shadow(2px 4px 6px black)'
      })),
      state('closed', style({
        opacity: 0.5,
        filter: 'grayscale(1)'
      })),
      transition('open <=> closed', [
        animate('0.3s')
      ])
    ]),
    trigger('getMainContent', [
      state('open', style({
        opacity: 1
      })),
      state('closed', style({
        opacity: 0.5,
        width: '51%'
      })),
      transition('open <=> closed', [
        animate('0.3s')
      ])
    ]),
    trigger('openCloseCarousel', [
      state('open', style({
        height: '63%'
      })),
      state('closed', style({
        height: '35%'
      })),
      transition('closed => open', [
        animate('0.3s')
      ]),
      transition('open => closed', [
        animate('0.3s')
      ])
    ]),
    trigger('hideTitle', [
      state('hide', style({
        opacity: 0.5,
        marginTop: '15%'
      })),
      state('reveal', style({
        opacity: 1,
        marginTop: '5%'
      })),
      transition('hide <=> reveal', [
        animate('0.3s')
      ])
    ]),
    trigger('hideTextTitle', [
      state('hide', style({
        marginTop: "auto",
        marginBottom: "auto",
        opacity: 0
      })),
      state('reveal', style({
        marginTop: "10%",
        opacity: 1
      })),
      transition('hide <=> *', [
        animate('0.3s')
      ])
    ]),
    trigger('hideButtonMedia', [
      state('hide', style({
        marginTop: '1%',
        opacity: 0.5
      })),
      state('reveal', style({
        marginTop: '5%',
        opacity: 1
      })),
      transition('hide <=> reveal', [
        animate('0.3s')
      ])
    ]),
  ]
})
export class WebContainerComponent implements OnInit {

  @Input() staffMember: Staff[] = [];
  public mainImageUrl: string = '../assets/FONKBOXLOGO.webp';
  public isOverCarousel = false;

  constructor() { }

  ngOnInit(): void {

  }

  public growContent(){
    this.isOverCarousel = false;
  }

  public reduceContent(){
    this.isOverCarousel = true;
  }

  public open(id: number) {
    if (this.staffMember.find(member => member.id === id)){
      this.staffMember.filter(member => member.id === id)[0].isOpen = true;
    }
}

  public close(id: number) {
    if (this.staffMember.find(member => member.id === id)){
      this.staffMember.filter(member => member.id === id)[0].isOpen = false;
    }
  }
}
