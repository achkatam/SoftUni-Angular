import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  user = {
    name: 'John',
    age: 25,
    city: 'New York',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };

  sum(a:number, b:number): number {
    return a + b;
  }

  addProperty() :void {
      (this.user as any)['test123'] = 'test123';
      console.log(this.user);
    }

    constructor(private userService:UserService){}
    
  ngOnInit(): void {
    this.userService.loadUsers().subscribe((users) => {
      next:console.log();
    });
  }
}