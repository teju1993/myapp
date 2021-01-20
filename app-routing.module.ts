import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { UserlistComponent } from './UserList/userlist/userlist.component';


const routes: Routes = [
  {path:'search-input',component:SearchInputComponent},
  {path:'userlist',component:UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
