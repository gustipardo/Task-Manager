import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  constructor(private data:DataService){}
  @Output() myBoolean = new EventEmitter<boolean>();
  UserString:string="";


  UserDate= this.data.dateString;
  error=false;

  hidePopup(){
    this.myBoolean.emit(false);
  }
  addTask(){
    if(this.UserString.length > 3){
      if(this.data.countTasks()<=9){
        this.data.addTask(this.UserString, this.UserDate)}
      else{
        this.data.setError(true);
      }
        this.hidePopup();
    } else{
      this.error=true
    }
  }
  handlecontainer(event:Event) {
      if (event.target == event.currentTarget) 
      this.hidePopup();
    }
}
