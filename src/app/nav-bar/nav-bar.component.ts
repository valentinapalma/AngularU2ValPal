import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoginNavi():void {
    this.router.navigate(['/login']);
  }

  onDashNavi():void {
    this.router.navigate(['/dashboard']);
  }

}
