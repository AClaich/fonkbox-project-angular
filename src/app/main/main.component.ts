import { animate, state, style, transition, trigger } from '@angular/animations';
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
        opacity: 1
      })),
      state('closed', style({
        opacity: 0.5,
        backgroundColor: 'grey'
      })),
      transition('open <=> closed', [
        animate('0.5s')
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
        animate('0.5s')
      ])
    ]),
    trigger('getCarousel', [
      state('open', style({
        height: '63%'
      })),
      transition('open <=> *', [
        animate('0.5s')
      ])
    ]),
    trigger('hideTitle', [
      state('hide', style({
        opacity: 0.5,
        marginTop: '20%'
      })),
      transition('hide <=> *', [
        animate('0.5s')
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
        animate('0.5s')
      ])
    ]),
    trigger('hideButtonMedia', [
      state('hide', style({
        marginTop: "12%",
        opacity: 0.5
      })),
      state('reveal', style({
        marginTop: "28%",
        opacity: 1
      })),
      transition('hide <=> reveal', [
        animate('0.5s')
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
      pseudo: "@Rizclech",
      details: "Some guy",
      imgPath: "../../assets/Photodidentite.jpg",
      isOpen: false
    },
    {
      id: 1,
      firstName: "Christophe",
      lastName: "Gallerand",
      pseudo: "",
      details: "Some guy",
      imgPath: "",
      isOpen: false
    },
    {
      id: 2,
      firstName: "Florien",
      lastName: "Pannier",
      pseudo: "@Fioricco",
      details: "Some guy",
      imgPath: "",
      isOpen: false
    },
    {
      id: 3,
      firstName: "Thibault",
      lastName: "D'Artigues",
      pseudo: "",
      details: "Some guy",
      imgPath: "",
      isOpen: false
    }
  ];

  public getStaffMember = false;

  constructor() { }

  ngOnInit(): void {

  }

  public growContent(){
    this.getStaffMember = false;
  }

  public reduceContent(){
    this.getStaffMember = true;
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
