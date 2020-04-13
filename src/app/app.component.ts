import { Component } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private http:HttpClient){}

  ngOnInit():void{
    const headers = new HttpHeaders({"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	"x-rapidapi-key": "742f9e29a6msh037523ab76b3191p1dcd2bjsncedd44f55720"});
    this.http.get('https://covid-19-data.p.rapidapi.com/totals',{headers:headers}).subscribe(value=>console.log(value))
  }
}
