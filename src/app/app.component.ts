import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapplication1';
  name :string = '';
  message :string ='';
  data=[
    {"Id":1 ,"Name":"Raman","City":"Vadodara"},
    {"Id":2 ,"Name":"shyam","City":"Vadodara"},
    {"Id":3 ,"Name":"kamal","City":"Vadodara"},
  
  ]
  
  onbuttonclick($event:any)
  {
    debugger
      this.message=$event;
  }

  logindetail=[
    {"loginid":1,"pswd":"sys","amount":100},
    {"loginid":2,"pswd":"abc","amount":200},
    {"loginid":3,"pswd":"xyz","amount":300}
  ]

}
