import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-directive-example';
  isVisible = false;
  list: { title: string }[] = [
    { title: 'Tour of Heros' },
    { title: 'CLI Docutment' },
    { title: 'Angular blog' },
  ]
  style = {
    color: 'green',
  }
  color = 'aqua';

  buttonName = '보이기';
  toggle(): void {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.buttonName = '감추기';
    } else {
      this.buttonName = '보이기';
    }
  }

}
