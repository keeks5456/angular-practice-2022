import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name: string = "Akiko"
  myId: string = "testId"
  isDisabled: boolean = true
  successClass: string = "text-success"
  hasError: boolean = false 
  isSpecial: boolean = true
  messageClasses = {
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special": this.isSpecial
  }

  public greeting: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event)
    this.greeting = "greetings"

  }

}
