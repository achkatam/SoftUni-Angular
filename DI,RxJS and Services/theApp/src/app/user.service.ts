import { Injectable } from '@angular/core';
import { User } from './types/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Doe', age: 25 },
    { name: 'Jim Doe', age: 20 },
    { name: 'Josh Doe', age: 15 },
  ];

  constructor() {
    setInterval(() => {
      this.users.push({
        name: 'New User',
        age: 20,
      });
    }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: parseInt(inputAge.value),
    };

    this.users = [user, ...this.users];
    // Clear the input fields
    inputName.value = '';
    inputAge.value = '';
  }
}
