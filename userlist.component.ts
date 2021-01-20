import { Component, OnInit } from '@angular/core';
import { Products, UserList } from 'src/app/user-list.model';
import {CommunicationService} from '../../service/communication.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html'
  ,
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  prd: UserList;
  prds=Products ;
 
  UserName:string;
  private _FilterProducts: Array<UserList>;
  constructor(private serv: CommunicationService) {
      this.prd = new UserList(0, "", "");
      this.UserName;
      this._FilterProducts = new Array<UserList>();
  }

  
  ngOnInit() {
      this.serv.receivedFilter.subscribe((param: string) => {
          this.UserName = param;
      });
  }

  
  get FilterProducts(): Array<UserList> {
      this._FilterProducts = new Array<UserList>();
     if (this.UserName) {
         this.prds.forEach(p => {
              if (p.UserName === this.UserName) {
                  this._FilterProducts.push(p);
              }
          });
      } else {
          this._FilterProducts = this.prds;
      }
      return this._FilterProducts;
  }

 
}
