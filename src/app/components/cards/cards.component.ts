import {Component, Input, OnInit, Output} from '@angular/core';
import {TitleInterface} from '../../interfaces/title.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  currentCardsIndex: number[];

  @Input()
  titles: TitleInterface[];

  constructor() { }

  ngOnInit(): void {
  }

}
