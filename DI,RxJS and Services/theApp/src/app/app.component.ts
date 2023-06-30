import { Component, OnInit } from '@angular/core';
import { User } from './types/JsonPlaceholderUser';
import { UserService } from './user.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'theApp';
  appUsers: User[] = [];
  isLoading = true;
  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }

  ngOnInit() { 
    // this.userService.getUsers().then((users) => {
    //   this.appUsers =  users;
    //   this.isLoading = false;
    // });

    this.userService.getUsers()
    .subscribe((users) => {
      this.appUsers = users;
      this.isLoading = false;
    });
  }
  
  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    this.userService.addUser(inputName, inputAge);
    this.appUsers = this.userService.users;
  }


}