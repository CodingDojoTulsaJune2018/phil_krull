import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-show-one',
  templateUrl: './user-show-one.component.html',
  styleUrls: ['./user-show-one.component.css']
})
export class UserShowOneComponent implements OnInit {
  user: User;

  constructor(
    private _uService: HttpService,
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    this._router.params.subscribe(params => this.user = this._uService.getUser(params.index));
  }

}
