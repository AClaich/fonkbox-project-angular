
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-container',
  templateUrl: './web-container.component.html',
  styleUrls: ['./web-container.component.scss']
})
export class WebContainerComponent implements OnInit {

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
}
