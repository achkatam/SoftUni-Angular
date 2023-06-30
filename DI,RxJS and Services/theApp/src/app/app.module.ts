import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListItemComponent } from './users-list-item/users-list-item.component';
import { UserService } from 'src/app/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
