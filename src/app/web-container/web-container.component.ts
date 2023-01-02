
import { Component, Input, OnInit } from '@angular/core';
import { Staff } from '../main/main.component';

@Component({
  selector: 'app-web-container',
  templateUrl: './web-container.component.html',
  styleUrls: ['./web-container.component.scss']
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
