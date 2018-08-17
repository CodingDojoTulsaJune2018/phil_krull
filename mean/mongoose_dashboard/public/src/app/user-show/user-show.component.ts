import { HttpService } from './../http.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  users: User[];
  constructor(private _uService: HttpService) { }

  ngOnInit() {
    this.users = this._uService.getUsers();
  }

}
