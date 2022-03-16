import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-three',
  templateUrl: './assign-three.component.html',
  styleUrls: ['./assign-three.component.css']
})
export class AssignThreeComponent implements OnInit {

  toggle = false;
  logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.toggle = !this.toggle;
    this.logs.push(Date());
  }

}
