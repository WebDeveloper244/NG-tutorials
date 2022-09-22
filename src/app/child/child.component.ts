import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() boxColor:any;
 @Input() placeholderText:any;
 number:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  onCreate(inputValue:any){
this.number ++;
alert(inputValue.value)
  }
}
