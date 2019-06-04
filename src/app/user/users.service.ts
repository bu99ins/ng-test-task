import { User } from "./user.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  private users: User[] = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
    }
  ];

  getUsers(): User[] {
    return this.users.slice();
  }

  loadPage(index: number) {
    return this.http.get(`https://reqres.in/api/users?page=${index}`);
  }

  loadUser(id: number) {
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
