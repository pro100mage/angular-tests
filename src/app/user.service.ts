import { Injectable } from '@angular/core';
import { Users } from './mock-users';
import { User } from "./user";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }
  
  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users');
    return of(Users);
  }

  getUser(id: number): Observable<User> {
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(Users.find(user => user.id === id));
  }
}
