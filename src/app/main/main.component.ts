import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export class Staff {
  public id: number;
  public firstName: string;
  public pseudo: string;
  public details: string;
  public imgPath: string;
  public isOpen: boolean;

  constructor(id: number, firstName: string, pseudo: string, details: string, imgPath: string, isOpen: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.pseudo = pseudo;
    this.details = details;
    this.imgPath = imgPath;
    this.isOpen = isOpen;
  }
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public mobileSupport: boolean = false;

  public staffMember: Staff[] = [
    {
      id: 0,
      firstName: "Alexis",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/alexis.webp",
      isOpen: false
    },
    {
      id: 1,
      firstName: "Christophe",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/christophe.webp",
      isOpen: false
    },
    {
      id: 2,
      firstName: "Florian",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/florian.webp",
      isOpen: false
    },
    {
      id: 3,
      firstName: "Thibault",
      pseudo: "",
      details: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
      imgPath: "../../assets/thibault.webp",
      isOpen: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
    if(navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)){
      this.mobileSupport = true;
    }
    else {
      this.mobileSupport = false;
    }
  }
}
