import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';


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
    
      this.countryStatusArr=value.Countries;
       
      })
    
  }

}