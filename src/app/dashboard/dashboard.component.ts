import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList:string[] = ['Aja', 'Aquaria', 'Jinkx', 'Peppermint', 'Vivacious'];
  
  constructor() { }

  ngOnInit() {
  }

  //Lägger till ny användare till listan
  onAddUser(user:string):void {
    this.userList.push(user);
  }

  //Tar bort den senaste användaren från listan
  onRemoveUser():void {
    this.userList.pop()
  }

}
