import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tutorials';
  users:any=[];


  pushUser(data:any){
this.users.push(data)


  }
}
