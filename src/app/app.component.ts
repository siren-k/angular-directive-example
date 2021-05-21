import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directive-example';
  isVisible = true;
  list: { title: string }[] = [
    { title: 'Tour of Heros' },
    { title: 'CLI Docutment' },
    { title: 'Angular blog' },
  ]
  style = {
    color: 'green',
  }
}
