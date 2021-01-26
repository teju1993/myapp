import { Component, OnInit } from '@angular/core';
// import * as location_tracking from '../location_tracking.json';
import * as salesman from '../salesman.json';
import * as attendance from '../attendance.json';
interface salesman{
  
  name:string;
city:string;
}
interface attendance{
  in_time:string;
}
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent 

{
  
myjson = JSON.parse(JSON.stringify(salesman)).default;
att=JSON.parse(JSON.stringify(attendance)).default;
isShow:boolean=false;
 constructor() { }

   ngOnInit(): void {
console.log(this.myjson.length);
console.log(this.myjson);
console.log(this.att.length);
console.log(this.att);
 for(let i=0; i<this.att.length;i++){
   let date=new Date();
   date=JSON.parse(JSON.stringify(this.att[i].modified_date));
   this.att[i].modified_date=this.att;

 }
   
}
}