import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserDomainService } from '../services/user-domain.service';


@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  constructor(private userService: UserDomainService, private router:Router) { }

  public users;

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.userService.getUsers().subscribe(
      data => { this.users = data },
      err => console.error(err),
      () => console.log("users loaded.")
    );
  }

  deleteUser(userEmail: string) {
    this.userService.deleteUser(userEmail).subscribe(() => {
      this.loadUsers();
    });
  }

}
