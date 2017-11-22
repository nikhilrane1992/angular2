import { Component } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Component({
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    users: any;
    

     constructor(private http: HttpClient) {}
    
     ngOnInit(): void {
       
     }
     getData(){
        this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
            this.users = data;
            console.log("Done")
            console.log(this.users)
          });
     }

}