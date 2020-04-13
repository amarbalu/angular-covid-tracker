import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { map,filter,tap } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-country-status',
  templateUrl: './country-status.component.html',
  styleUrls: ['./country-status.component.css']
})
export class CountryStatusComponent implements OnInit {
countryStatusArr:object[];
  constructor(private service:CovidServiceService) { }

  ngOnInit() {
 
    this.service.obs$.subscribe(value=>{
      const filtered=value.Countries.filter(value=>value.TotalConfirmed>0);
      this.countryStatusArr=filtered;
       
      })
    
  }

}