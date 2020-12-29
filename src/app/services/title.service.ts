import { Injectable } from '@angular/core';
import {BackendTitleService} from './backend-title.service';
import {Observable, Subject} from 'rxjs';
import {TitleInterface} from '../interfaces/title.interface';
import {map, reduce, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TitleService {


    constructor(private  backendTitleService: BackendTitleService) {}

    public fetchTitles(): Observable<TitleInterface[]>{
      return this.backendTitleService.getTitles();
    }
}
