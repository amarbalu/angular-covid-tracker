import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Subject,Observable} from 'rxjs';
import {status} from './status/status.model';

@Injectable()

export class CovidServiceService {
globalStatus:object;
private subs$:Subject<string>;
obs$:Observable<string>;
  constructor(private http:HttpClient) { 
    this.subs$ = Subject.create();
    this.obs$=this.subs$.asObservable();
  }
getLatestStatus(){
  this.http.get<{Date:string,Global:object,Countries:object[]}>('https://api.covid19api.com/summary').subscribe(value=>{
    const {Global}:status=value;
    this.subs$.next(Global);
  });
}
}