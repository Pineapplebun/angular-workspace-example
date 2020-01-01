import { Component } from '@angular/core';
import { ApiService } from '@pineapplebun/angular-workspace-example-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly api: ApiService) {}

  get message() {
    return this.api.getMessage();
  }

  alert() {
    window.alert(this.message);
  }
}
