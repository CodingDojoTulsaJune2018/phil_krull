import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  users: User[] = [
    new User('Phil', 'Tulsa'),
    new User('Donovan', 'Seattle'),
    new User('Authman', 'Dallas'),
    new User('Anne', 'Chicago'),
    new User('Speros', 'San Jose'),
    new User('Tim', 'Tysons'),
    new User('Edurado', 'Burbank')
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getUser(index: number): User {
    return this.users[index];
  }
}
