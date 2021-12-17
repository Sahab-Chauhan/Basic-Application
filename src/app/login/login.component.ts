import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor() { }
  @Input() logindata:any;
  @Output() sendmessage = new EventEmitter();

  onbuttonclick(): void{
    debugger
    this.sendmessage.emit("Message send from Login component to the parent component");

  }

  

}
