import { Component, OnInit } from '@angular/core';
import { Categories, EmpName } from 'src/app/emp-name.model';
import {CommunicationService}  from '../../service/communication.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  searchText;
  cat: EmpName;
    cats= Categories ;
   // CatName:string;
 
    constructor(private serv: CommunicationService) {
        this.cat = new EmpName("");
    }
 
 
    ngOnInit(): void { }
 
     
    getSelectedCategory(c: EmpName): void {
        this.cat = c;
        this.serv.raiseEvent(this.cat.UserName);
    }

  

}
