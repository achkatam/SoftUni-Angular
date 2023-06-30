import { Component } from '@angular/core';
import { User } from './type/User';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'theApp';

  users: User[]  = [
    {name: 'John Doe', age: 30},
    {name: 'Jane Doe', age: 25},
    {name: 'Jim Doe', age: 20},
    {name: 'Josh Doe', age: 15}
  ]
}
