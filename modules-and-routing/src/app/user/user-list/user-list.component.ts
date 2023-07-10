import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; 
import { GlobalLoaderService } from '../../core/global-loader/global-loader.service';
import { User } from '../../types/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  userList: User[] = [];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.globalLoaderService.showLoader();

    setTimeout(() => {
      this.userService.fetchUsers().subscribe((users) => {
        this.userList = users;
        this.globalLoaderService.hideLoader();
      });
    }, 1000);
  }

  reloadUsers() {
    this.loadUsers();
  }
}
