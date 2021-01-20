import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { CommunicationService } from './service/communication.service';
import { UserlistComponent } from './UserList/userlist/userlist.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
