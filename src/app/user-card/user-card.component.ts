import { Component, OnInit, Input } from "@angular/core";

import { User } from "../user/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.less"]
})
export class UserCardComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() user: User;

  ngOnInit() {}

  showUser(id: number) {
    this.router.navigate(["user", id]);
  }
}
