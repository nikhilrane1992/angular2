import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersItemComponent } from "./users-item/users-item.component"


@NgModule({
    declarations: [
        UsersComponent,
        UsersItemComponent
    ],
    imports: [
        CommonModule, 
        UsersRoutingModule
    ]
})

export class UsersModule {

}