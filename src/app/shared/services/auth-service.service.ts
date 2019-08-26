import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  url = 'http://localhost:8000/auth';

  constructor(private httpClient: HttpClient) {}

  register(user) {
    return this.httpClient.post<any>(this.url + '/register', user);
  }

  login(user) {
    return this.httpClient.post<any>(this.url + '/login', user);
  }
}
