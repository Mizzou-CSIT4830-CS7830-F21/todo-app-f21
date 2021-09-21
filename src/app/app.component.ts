import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoApp';

  todo:string = ""; 

  todoArray:string[] = []; 

  addTodo(){
    if(this.todo != ""){
      this.todoArray.push(this.todo); 
      console.log(this.todo); 
    }
    else {
      alert("Todo Field Required!"); 
    }
  }

}
