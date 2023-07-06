import { Injectable } from '@angular/core';
import { User } from './types/JsonPlaceholderUser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor(private httpClient: HttpClient) {
    // setInterval(() => {
    //   this.users.push({
    //     name: 'New User',
    //     age: 20,
    //   });
    // }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // const user = {
    //   name: inputName.value,
    //   age: parseInt(inputAge.value),
    // };

    // this.users = [user, ...this.users];

    // Clear the input fields
    inputName.value = '';
    inputAge.value = '';
  }

  getUsers() {
    // PROMISE
    // return fetch('https://jsonplaceholder.typicode.com/users')
    // .then((result) => result.json());

    // OBSERVABLE
   return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
}
