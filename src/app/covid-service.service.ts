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
  this.http.get<{reports:status[]}>('https://covid19-server.chrismichael.now.sh/api/v1/AllReports').subscribe(value=>{
    const Global={
      TotalConfirmed:value.reports[0].cases,
      TotalDeaths:value.reports[0].deaths,
      TotalRecovered:value.reports[0].recovered,
      ActiveCases:value.reports[0].active_cases[0],
      ClosedCases:value.reports[0].closed_cases[0]
    }
    const CountriesToday=value.reports[0].table[0];
    const CountriesYester=value.reports[0].table[1];
    const Countries={Today:CountriesToday,YesterDay:CountriesYester}
    const responseData={Global,Countries}
    this.subs$.next(responseData)
  });
}
}