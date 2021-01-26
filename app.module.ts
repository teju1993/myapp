import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AttendanceComponent } from './attendance/attendance.component';
import { HttpClientModule } from '@angular/common/http';
//import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
   
   
    BrowserAnimationsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'GOOGLE API KEY',
    //   libraries: ['places']
    // })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
