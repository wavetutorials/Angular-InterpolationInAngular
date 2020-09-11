import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<div class="content">
  <h3>{{'Welcome to : ' + title}}</h3>

  <h3>{{(10 + 20) * 2}}</h3>

  <h3>{{title ? title : 'No Title to display'}}</h3>

  <h3>{{ShowMessage()}}</h3>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';

  firstName = 'Wave';
  lastName = 'Tutorials';

  constructor() {
  }

  ShowMessage(): string {
    return 'Welcome to : ' + this.firstName + ' ' + this.lastName;

  }

}
