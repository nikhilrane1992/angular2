import { Component, Input } from "@angular/core";

@Component({
    selector: 'user-item',
    templateUrl: './users-item.component.html',
    styleUrls: ['./users-item.component.css']
})

export class UsersItemComponent {
 @Input() user: {};
}