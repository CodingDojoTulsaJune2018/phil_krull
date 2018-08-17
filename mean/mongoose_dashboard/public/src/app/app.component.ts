import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  url: String;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    const check = this._route.snapshot;
    console.log(check);
    // this._route.;
  }
}
