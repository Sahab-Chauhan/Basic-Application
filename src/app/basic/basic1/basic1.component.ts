import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic1',
  templateUrl: './basic1.component.html',
  styleUrls: ['./basic1.component.css']
})
export class Basic1Component implements OnInit {
  @Input() item = '';
  constructor() { }

  ngOnInit(): void {
  }

}
