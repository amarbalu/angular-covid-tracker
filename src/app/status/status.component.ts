import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
globalStatus:object
  constructor(private service:CovidServiceService) { }

  ngOnInit() {
    this.service.getLatestStatus();
    this.service.obs$.subscribe(value=>{
      this.globalStatus=value;
    }
    )
  }

}