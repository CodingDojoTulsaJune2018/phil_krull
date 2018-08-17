import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    const check = this._route.snapshot;
    console.log(check);
  }

}
