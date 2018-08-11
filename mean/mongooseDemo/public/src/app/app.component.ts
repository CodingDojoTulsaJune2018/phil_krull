import { HttpService } from './http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Hello Angular';
  Service: HttpService;

  constructor(Service: HttpService) {
    this.Service = Service;
  }
}
