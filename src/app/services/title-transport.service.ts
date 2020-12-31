import { Injectable } from '@angular/core';
import {TitleInterface} from '../interfaces/title.interface';

@Injectable({
  providedIn: 'root'
})
export class TitleTransportService {

  public titlesArray = [];
  constructor() { }

  public pushTitle(title: TitleInterface): void{
    console.log(title);
    this.titlesArray.push(title);
  }
  public getTitles(): TitleInterface[]{
    return this.titlesArray;
  }
}
