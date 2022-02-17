import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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

  public mainImageUrl: string = '../assets/FONKBOXLOGO.png';
  public staffMember: Staff[] = [
    {
      id: 0,
      firstName: "Alexis",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/alexis.jpg",
      isOpen: false
    },
    {
      id: 1,
      firstName: "Christophe",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/christophe.jpg",
      isOpen: false
    },
    {
      id: 2,
      firstName: "Florian",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/florian.jpg",
      isOpen: false
    },
    {
      id: 3,
      firstName: "Thibault",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/thibault.jpg",
      isOpen: false
    }
  ];

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
