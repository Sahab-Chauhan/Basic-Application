import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @Input() empdata: any;
  @Output()  childtoparent= new EventEmitter();
  public name: string="Steave";
  public text: string = "Hello";
  public caption: string = "Click Me!";
  num: number = 0;
  randomNums: number[] = [3, 6, 7, 8, 1, 122, 44, 67, 790];
  number=10;
  date:any=22-11-21;
  jsonVal={ moo: 'foo', goo: { too: 'new' }};
  Str="RAMAN";

   data=[
    {
      "id":1,
      "name":'xyz'
    },
    {
      "id":2,
      "name":'xyz'
    },
    {
      "id":3,
      "name":'xyz'
    }
  ]

   arr1=['ram','shyam','kumar'];
   


  ngOnInit(): void {
  }


  getCurrentTime(): any {
    //alert(Date.now());
    alert(Date.now());
  }

  onbuttonclick(): void{
    this.childtoparent.emit("Message send from child to parent component");
  }

}
