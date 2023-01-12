import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit{

  public mainImageUrl: string = '../assets/FONKBOXLOGO.webp';

  constructor() { }

  ngOnInit() {

  }
}