import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  constructor(private httpRequest: HttpClient) {}

  ngOnInit(): void {

  }

  fetchUsers() {
    return this.httpRequest.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
