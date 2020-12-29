import {Component, Input, OnInit} from '@angular/core';
import {TitleInterface} from '../../interfaces/title.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title: TitleInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
