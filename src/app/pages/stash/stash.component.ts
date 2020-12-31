import { Component, OnInit } from '@angular/core';
import {TitleInterface} from '../../interfaces/title.interface';
import {TitleTransportService} from '../../services/title-transport.service';

@Component({
  selector: 'app-stash',
  templateUrl: './stash.component.html',
  styleUrls: ['./stash.component.css']
})
export class StashComponent implements OnInit {

  public titlesStash: TitleInterface[];
  public title: TitleInterface;
  currentCardsIndex = [0, 3];
  constructor(private titleTransport: TitleTransportService) { }

  ngOnInit(): void {
    this.titlesStash = this.titleTransport.getTitles();
    console.log(this.titlesStash);
  }

  public nextButton(currentIndex: number[]): number[]{
    currentIndex[0] = currentIndex[0] + 3;
    currentIndex[1] = currentIndex[1] + 3;
    return currentIndex;
  }
  public previousButton(currentIndex: number[]): number[]{
    currentIndex[0] = currentIndex[0] - 3;
    currentIndex[1] = currentIndex[1] - 3;

    return currentIndex;
  }
  public toggleDisable(currentIndex: number[]): boolean{
    return (currentIndex[0] - 3 < 0) ;
  }
}
