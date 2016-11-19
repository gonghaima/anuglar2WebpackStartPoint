import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(){
    console.log("Hello Steven!");
  }
  
  clicktest(){
    console.log("Steven clicked!");
  }
}
