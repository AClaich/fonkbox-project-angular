import { Component, OnInit } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';

class Staff {
  public id: number;
  public firstName: string;
  public lastName: string;
  public pseudo: string;
  public details: string;
  public imgPath: string;
  public cardSize: number;

  constructor(id: number, firstName: string, lastName: string, pseudo: string, details: string, imgPath: string, cardSize: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.pseudo = pseudo;
    this.details = details;
    this.imgPath = imgPath;
    this.cardSize = cardSize;
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    
  ]
})
export class MainComponent implements OnInit {

  private lowSize: number = 4;
  private highSize: number = 12;
  private normalSize: number = 6;

  public mainImageUrl: string = '../assets/FONKBOXLOGO.png';
  public staffMember: Staff[] = [
    {
      id: 1,
      firstName: "Alexis",
      lastName: "Claich",
      pseudo: "Rizclech",
      details: "Some guy",
      imgPath: "",
      cardSize: this.normalSize
    },
    {
      id: 2,
      firstName: "Christophe",
      lastName: "Gallerand",
      pseudo: "",
      details: "Some guy",
      imgPath: "",
      cardSize: this.normalSize
    },
    {
      id: 3,
      firstName: "Florien",
      lastName: "Pannier",
      pseudo: "Fioricco",
      details: "Some guy",
      imgPath: "",
      cardSize: this.normalSize
    },
    {
      id: 4,
      firstName: "Thibault",
      lastName: "",
      pseudo: "",
      details: "Some guy",
      imgPath: "",
      cardSize: this.normalSize
    }
  ];


  constructor() { }

  ngOnInit(): void {

  }

  public overCard(member: Staff){
    member.cardSize = this.highSize;
    this.staffMember.forEach(otherMember => {
      if (otherMember.id != member.id) otherMember.cardSize = this.lowSize
    });
  }
}
