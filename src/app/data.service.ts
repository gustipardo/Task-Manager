import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  today = new Date();
  year = this.today.getFullYear();
  month = (this.today.getMonth() + 1).toString().padStart(2, '0');
  day = this.today.getDate().toString().padStart(2, '0');
  dateString = `${this.year}-${this.month}-${this.day}`;

  Tasks: string[] = [];
  Dates: string[] = [];
  error2= false;
  private storageKey = 'MyTasks';
  private storageKey2 = 'MyDates';

  
  constructor() {
    const storedTasks = JSON.parse(localStorage.getItem(this.storageKey) ?? 'null');
    const storedDates = JSON.parse(localStorage.getItem(this.storageKey2) ?? 'null');
    if (storedTasks !== null && storedDates!== null) {
      this.Tasks = storedTasks;
      this.Dates = storedDates;
    }
  }

  addTask(value:string,value2:string){
    this.Tasks.push(value);
    this.Dates.push(value2);
    this.saveTasks();
  }
  saveTasks(){
    localStorage.setItem(this.storageKey, JSON.stringify(this.Tasks));
    localStorage.setItem(this.storageKey2, JSON.stringify(this.Dates));
  }
  countTasks(){
    return this.Tasks.length;
  }
  deleteTask(index:number){
    this.Tasks.splice(index, 1);
    this.Dates.splice(index, 1);
    this.saveTasks();
    if(this.countTasks() == 9){ 
      this.error2=false;
      ;}
  }
  setError(value:boolean){
    this.error2=value;
  }
}
