import { Animal } from './animal';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: String = 'Endangered Species';


  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {}


}
