import { Component, Input } from "@angular/core";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    todoList = [{
        name: "Nikhil Rane", 
        img: "http://nikhilrane.com/assets/images/profile.png",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Adipisci et non magni ducimus vero tenetur iste voluptatem, 
            suscipit sed dolorem architecto, nobis. Consequatur fugiat, 
            accusantium expedita saepe quasi blanditiis amet.`
    },{
        name: "Aman Rane", 
        img: "http://nikhilrane.com/assets/images/profile.png",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Adipisci et non magni ducimus vero tenetur iste voluptatem, 
            suscipit sed dolorem architecto, nobis. Consequatur fugiat, 
            accusantium expedita saepe quasi blanditiis amet.`
    }]
    todoObj = {
        name: "",
        img: "",
        description: ""
    }

    addToList() {
        this.todoList.push(this.todoObj);
        this.todoObj = {
            name: "",
            img: "",
            description: ""
        }
    }
}