import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { UserRoutingModule } from "./users-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [UsersComponent],
    imports: [CommonModule, UserRoutingModule]
})

export class UsersModule {

}