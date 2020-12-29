import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TitleInterface} from '../interfaces/title.interface';

@Injectable({
  providedIn: 'root'
})
export class BackendTitleService {

  url = 'http://localhost:3000/titles';
  constructor(private http: HttpClient) { }

  public getTitles(): Observable<TitleInterface[]>{
    return this.http.get<TitleInterface[]>(this.url);
  }
}
