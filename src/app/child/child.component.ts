
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() boxColor:any;
 @Input() placeholderText:any;
 number:number=0;
 @Output() inputEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onCreate(inputValue:any){
     if (inputValue.value.length>0)
        this.number ++;
        // alert(inputValue.value)
        this.inputEvent.emit(inputValue.value)
  }

}

