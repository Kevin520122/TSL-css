import { Component, VERSION } from '@angular/core';
import { cardsService } from './service/cards.service';
import { Card } from './service/interfaces/cards.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  datalist: Card[];
  cardContent: Card;
  constructor(public cardService: cardsService){}

  ngOnInit(){
    this.datalist = this.cardService.datalist;
    this.cardContent = {...this.datalist[0]}
  }

  showCard(curCard: Card){
    this.cardContent = {...curCard};
    console.log(this.cardContent.color)
  }
}
