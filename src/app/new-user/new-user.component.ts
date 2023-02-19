import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../model/user';
import { UserDomainService } from '../services/user-domain.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: User;

  constructor(private userService: UserDomainService,
    private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  saveUser() {
    this.userService.saveUser(this.user).toPromise().then(() => {
      this.router.navigate(['user-listing']);
    });
  }

}
