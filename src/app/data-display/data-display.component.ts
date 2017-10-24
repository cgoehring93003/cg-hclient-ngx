import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IEmployee, Employee } from './../employee.model';
import { HttpModule, Http, Response } from '@angular/http';
import { HttpClient, HttpParams} from "@angular/common/http";
import { HttpDataService } from './../http-data-service.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})

export class DataDisplayComponent implements OnInit {

  dbg = false;
  formGroupSearch;
  formsearchmodel;
  formmodel;
  emp:  IEmployee;
  empdata: any;
  empdataresult: any;

  constructor(private dataService: HttpDataService) { }

  ngOnInit() {


    this.emp= new Employee(0, '','','','','','','','');

    this.formmodel = new FormGroup({
      id: new FormControl(this.emp.id),
      firstName: new FormControl(this.emp.firstName),      
      lastName: new FormControl(this.emp.lastName),
      city: new FormControl(this.emp.city),      
      state: new FormControl(this.emp.state),
      zip: new FormControl(this.emp.zip),
      dogName: new FormControl(this.emp.dogName),      
      fishName: new FormControl(this.emp.fishName),
      carBrand: new FormControl(this.emp.carBrand),
      searchOnNameOrID: new FormControl("")

    });

  }

  onSubmit = function(user) {
    console.log(user);
  };

  mySubmit = function() {
    console.log('mySubmit');
  };


  onSubmitSearch() {
    var searchBox = (<HTMLInputElement>document.getElementById("searchOnNameOrID")); //.value;
    var searchBoxValue  = searchBox.value;

    this.dataService.getOne(searchBoxValue)
          .debug("ngOnInit: getOne")
          .subscribe( 
            (value) => this.emp = value,

            () =>  { console.log('error')  },

            () =>  { console.log('complete') 

              ,    (this.formmodel.controls['id']).setValue(this.emp.id, { onlySelf: true })
              ,    (this.formmodel.controls['firstName']).setValue(this.emp.firstName, { onlySelf: true })
              ,    (this.formmodel.controls['lastName']).setValue(this.emp.lastName, { onlySelf: true })
              ,    (this.formmodel.controls['city']).setValue(this.emp.city, { onlySelf: true })
              ,    (this.formmodel.controls['state']).setValue(this.emp.state, { onlySelf: true })
              ,    (this.formmodel.controls['zip']).setValue(this.emp.zip, { onlySelf: true })
              ,    (this.formmodel.controls['dogName']).setValue(this.emp.dogName, { onlySelf: true })
              ,    (this.formmodel.controls['fishName']).setValue(this.emp.fishName, { onlySelf: true })
              ,    (this.formmodel.controls['carBrand']).setValue(this.emp.carBrand, { onlySelf: true })

             }
            );


  }


}
