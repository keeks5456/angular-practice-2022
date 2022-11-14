import { Component } from '@angular/core';

//component decorator or metadata
@Component({
  selector: 'app-root', //can be custom html || class name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Class
export class AppComponent {

  title: string = 'angular-practice-2022';
  hasError: boolean = false 
  highlightColor: string = "orange"
  titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }
  name: string = "akiko"
  message = ""

}
