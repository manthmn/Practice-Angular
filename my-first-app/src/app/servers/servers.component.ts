import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreateStatus = "No server was created";
  serverName = "demoserver";
  serverCreated = false;
  servers = ["testserver", "testserver 2"];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

   onCreateServer(){
     this.serverCreated = true;
     this.servers.push(this.serverName);
     this.serverCreateStatus = "New server " + this.serverName + " is created";
   }

  //  onUpdateServerName(event : Event){
  //   // console.log(event);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  //  }

  ngOnInit(): void {
  }

}
