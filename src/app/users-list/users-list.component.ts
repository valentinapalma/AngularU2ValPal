import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() users:string[];
  
  constructor() { }

  ngOnInit() {
  }

  isActive: boolean = false;

  // Skapar en funktion så att toggle funkar
  toggle() {
     this.isActive = !this.isActive;
  }

}
