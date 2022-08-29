import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }
  constructor(private messageService: MessageService) { }
}

