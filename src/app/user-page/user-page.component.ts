import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../user/users.service";
import { User } from "../user/user.model";

@Component({
  selector: "app-user-page",
  templateUrl: "./user-page.component.html",
  styleUrls: ["./user-page.component.less"]
})
export class UserPageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  user = new User();

  ngOnInit() {
    this.usersService
      .loadUser(this.route.snapshot.params["id"])
      .subscribe(result => {
        this.user = result["data"];
      });
  }

  goHome() {
    this.router.navigate(["/"]);
  }
}
