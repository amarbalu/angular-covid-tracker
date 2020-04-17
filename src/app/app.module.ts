import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {HttpClientModule} from '@angular/common/http';
import { StatusComponent } from './status/status.component';
import { CountryStatusComponent } from './country-status/country-status.component';
import { CovidServiceService } from './covid-service.service';
import { ZeroFilterPipe } from './zero-filter.pipe';
import { ZeroRemovePipe } from './zero-remove.pipe';
import { PercentPipe } from './percent.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, StatusComponent, CountryStatusComponent, ZeroFilterPipe, ZeroRemovePipe, PercentPipe ],
  bootstrap:    [ AppComponent ],
  providers: [CovidServiceService]
})
export class AppModule { }
