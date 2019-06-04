import { Component, OnInit } from "@angular/core";

import { UsersService } from "../user/users.service";
import { User } from "../user/user.model";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.less"]
})
export class UsersListComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users: User[];

  currentPage = 1;
  totalPages: number;

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.loadPage(this.currentPage).subscribe(result => {
      this.totalPages = result["total_pages"];
      this.users = result["data"];
    });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadUsers();
    }
  }
}
