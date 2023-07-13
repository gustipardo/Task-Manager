import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private data:DataService){}
  title = 'Task Manager';
  Popup=false
  Tasks=[]
  error2=this.data.error2;
  showPopup(){
    this.Popup=true;
  }
  hidePopup(value:boolean){
    this.Popup=value;
    this.error2=this.data.error2;
  }
  setError(){
    this.error2=this.data.error2;
  }
}
