import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // @Input("parentData") name;
  @Input() parentData; //from parent
  @Output() childEvent = new EventEmitter() //output to parent



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

  greeting: string = ''


  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event)
    this.greeting = "greetings"

  }

  logMessage(value){
    console.log(value)
    return value
  }

  fireEvent(){
    this.childEvent.emit("Hello from child")
  }



} //end
