import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

import { User } from '../model/user';


const API_URL:string = 'https://vnnpoyajzd.execute-api.us-east-1.amazonaws.com/Dev/user';

@Injectable()
export class UserDomainService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(API_URL)
    .map((users: Array<any>)=>{
      let userMap:User[] = [];
      users && users.forEach((user)=>{
        userMap.push({
          firstName: user['au_first_name'],
          lastName: user['au_last_name'],
          email: user['au_email'],
          gender: user['au_gender'],
          id: user['id']
        });
      });
      return userMap;
    });
  }

  deleteUser(userEmail: string) {
    return this.http.delete(API_URL,
      {
        params: {
          "email": userEmail
        }
      });
  }

  saveUser(user: User) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, user, options);
  }

}
