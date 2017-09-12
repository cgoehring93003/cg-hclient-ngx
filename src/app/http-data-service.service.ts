
import { Injectable, Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/delay';
import { IEmployee } from './employee.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpDataService {

  //instance: IEmployee;
  myurl: string;
  oneurl: string;  

  constructor(private httpClient: HttpClient) {
    this.myurl ='http://newdeli:3069/employees';
    this.oneurl ='http://newdeli:3069/employee';    
  }

  getOne(lst) {

    console.log('getOne: ' + lst);

    return this.httpClient.get(this.oneurl + '/' + lst);

    //const params = new HttpParams().set('hideSpinner', 'true');, {params: params}
    /*
    return <Observable<IEmployee>>this.httpService.get<IEmployee>(this.oneurl + '/' + lst)
      .debug("getOne")
      .map(employees => employees.map(employee => employee));  */
  }

}
