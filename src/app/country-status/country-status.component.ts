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
displayArr:object[];
activepage:number;
pagearr:number[];
activeDay:string;
  constructor(private service:CovidServiceService) {
    
   }

  ngOnInit() {
 
    this.service.obs$.subscribe(value=>{
      const filtered=value.Countries.Today;
      console.log((filtered.length/25))
      this.pagearr=[...new Array(Math.floor(filtered.length/25)).fill(0)];
      this.displayArr=filtered;
      this.countryStatusArr=filtered.slice(0,25);
      this.activepage=1;
       
      })
    
  }
  pagechange(num:number){
    const from=(num*25)-25;
      const to=num*25;
    this.activepage=num;
    this.countryStatusArr=this.displayArr.slice(from,to);
  }
nextPage(){
  if(this.activepage !== this.pagearr.length){
  const num=this.activepage+1;
  const from=(num*25)-25;
  const to=num*25;
  this.activepage=num;
  this.countryStatusArr=this.displayArr.slice(from,to);
  }

}
previousPage(){
   if(this.activepage !== 1){
  const num=this.activepage-1;
  const from=(num*25)-25;
  const to=num*25;
  this.activepage=num;
  this.countryStatusArr=this.displayArr.slice(from,to);
   }
}
}