import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HttpParams} from "@angular/common/http";
import { HttpDataService } from './http-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule  
  ],
  providers: [HttpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
