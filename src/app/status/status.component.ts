import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { status } from './status.model';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
globalStatus:status
isLoading:boolean
  constructor(private service:CovidServiceService) { }

  ngOnInit() {
    this.isLoading=true
    this.service.getLatestStatus();

    this.service.obs$.subscribe(value=>{
      if(value && value.Global){
      this.globalStatus=value.Global;
      this.isLoading=false
      }
    }
    )
  }

}