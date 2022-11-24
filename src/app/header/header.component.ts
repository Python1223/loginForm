import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lc= localStorage;

  constructor() { }

  ngOnInit(): void {
  }
  logoutHandler(){
    this.lc.setItem('status','failed')
  }

}
