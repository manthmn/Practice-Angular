import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-two',
  templateUrl: './assign-two.component.html',
  styleUrls: ['./assign-two.component.css']
})
export class AssignTwoComponent implements OnInit {

  userName = "";

  constructor() { }

  ngOnInit(): void {
  }

  isUserName(){
    return this.userName == "" ? false : true;
  }

  resetUserName(){
    this.userName = "";
  }

}
