import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../services/title.service';
import {TitleInterface} from '../../interfaces/title.interface';
import {interval, Observable, Subject} from 'rxjs';
import {concatAll, count, reduce, take, tap} from 'rxjs/operators';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  titles$ = new Subject<TitleInterface[]>();
  currentCardsIndex = [0, 3];

  constructor(private titleService: TitleService,
              private userService: UserService,
              private authService: AuthService) {}

  public get titles(): Observable<TitleInterface[]>{
    return this.titles$.asObservable();
  }

  ngOnInit(): void {
    this.titleService.fetchTitles().subscribe(title => this.titles$.next(title));
    this.titles$.pipe(concatAll()).pipe(count()).subscribe(acc => console.log(acc));
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
