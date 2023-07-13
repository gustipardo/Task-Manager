import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  constructor(private data:DataService){}
  
  Tasks = this.data.Tasks;
  Dates = this.data.Dates;
  @Output() myError = new EventEmitter<boolean>();
  deleteTask(index:number){
    this.data.deleteTask(index);
    this.myError.emit(false);
  }
  getClass(index: number): string {
    const date = new Date(this.Dates[index]);
    const currentDate = new Date();
    const differenceInMilliseconds = date.getTime() - currentDate.getTime();
    const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    
    if (differenceInDays <= 1) {
      return 'urgent'; 
    } else if (differenceInDays <= 5) {
      return 'time-to-do-it'; 
    } else {
      return 'in-good-time'; 
    }
  }
}
