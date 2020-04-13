import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Subject,Observable} from 'rxjs';
import {status} from './status/status.model';

@Injectable()

export class CovidServiceService {
globalStatus:object;
private subs$:Subject<object>;
obs$:Observable<object>;
  constructor(private http:HttpClient) { 
    this.subs$ = new Subject<object>();
    this.obs$=this.subs$.asObservable();
  }
getLatestStatus(){
  this.http.get<{Date:string,Global:object,Countries:object[]}>('https://api.covid19api.com/summary').subscribe(value=>{
    const {Global}=value;
    console.log(Global)
    this.subs$.next(Global)
  });
}
}