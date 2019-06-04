import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { UsersService } from "./user/users.service";
import { HttpClientModule } from "@angular/common/http";
import { UserPageComponent } from "./user-page/user-page.component";

const appRoutes: Routes = [
  { path: "", component: UsersListComponent },
  { path: "user/:id", component: UserPageComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserCardComponent,
    UserPageComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
