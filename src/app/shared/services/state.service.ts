import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  user: User;
  url = 'http://localhost:8000/users/';

  constructor(private httpClient: HttpClient) {}

  loadUserData(id) {
    return this.httpClient.get<User>(this.url + id);
  }
}
