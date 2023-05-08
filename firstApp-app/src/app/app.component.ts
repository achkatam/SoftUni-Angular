import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   

  users = [
    {
      name: 'Steve 1',
      age: 24
    },
    {
      name: 'Steve 2',
      age: 24
    },
    {
      name: 'Steve 3',
      age: 24
    }
  ]
userArray: any;


}
