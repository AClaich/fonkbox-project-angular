import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

class Staff {
  public id: number;
  public firstName: string;
  public lastName: string;
  public pseudo: string;
  public details: string;
  public imgPath: string;
  public isOpen: boolean;

  constructor(id: number, firstName: string, lastName: string, pseudo: string, details: string, imgPath: string, isOpen: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.pseudo = pseudo;
    this.details = details;
    this.imgPath = imgPath;
    this.isOpen = isOpen;
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
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
      transition('closed <=> open', [
        // query('.details-member', [
        //   style({color: 'red',opacity: 0.5}),
        //   stagger(30, [
        //     animate('300ms',
        //     style({color: 'black'}))
        //   ]),
        //   stagger(50, [
        //     animate('300ms',
        //     style({opacity: 1, color: 'purple'}))
        //   ]),
        // ]),
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
export class MainComponent implements OnInit {

  public mainImageUrl: string = '../assets/FONKBOXLOGO.png';
  public staffMember: Staff[] = [
    {
      id: 0,
      firstName: "Alexis",
      lastName: "Claich",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/alexis.jpg",
      isOpen: false
    },
    {
      id: 1,
      firstName: "Christophe",
      lastName: "Gallerand",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/christophe.jpg",
      isOpen: false
    },
    {
      id: 2,
      firstName: "Florian",
      lastName: "Pannier",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/273568167_420052686540867_8533540451650689950_n.jpg",
      isOpen: false
    },
    {
      id: 3,
      firstName: "Thibault",
      lastName: "D'Artigues",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/thibault2.jpg",
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
    console.log('this.staffMember.filter(member => member.id === id)[0].isOpen : ' + this.staffMember.filter(member => member.id === id)[0].isOpen);
  }

  public close(id: number) {
    if (this.staffMember.find(member => member.id === id)){
      this.staffMember.filter(member => member.id === id)[0].isOpen = false;
    }
  }
}
