import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

export class Staff {
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
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public mobileSupport: boolean = false;

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
