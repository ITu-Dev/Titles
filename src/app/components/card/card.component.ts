import {Component, Input, OnInit} from '@angular/core';
import {TitleInterface} from '../../interfaces/title.interface';
import {TitleTransportService} from '../../services/title-transport.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: TitleInterface;
  public show = true;

  constructor(private titleTransport: TitleTransportService) { }

  ngOnInit(): void {
  }

  public likeButton(title: TitleInterface): void{
    this.titleTransport.pushTitle(title);
  }
  public dislikeButton(): void{
    this.show = false;
  }
}
