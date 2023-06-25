import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  title = 'hide';
  isActive = true;

  inputValue = 'Hello World';

  ngOnInit() {
    console.log('Navigation initialized');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Navigation changed');
  }

  activeUsers = [
    { name: 'Max', age: 27 },
    { name: 'Anna', age: 25 },
    { name: 'Chris', age: 26 },
    { name: 'Manu', age: 29 },
  ];

  ngAfterViewInit() {
    console.log('Navigation after initialization');
  }

  handleClick(): void {
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }
}
