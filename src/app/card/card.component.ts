import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../service/interfaces/cards.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardinfo: Card;
  @Input() curColor: string = '';
  constructor() { }

  ngOnInit() {
    
  }

  showCard(){

  }
}