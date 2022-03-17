import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{name: string, content: string}>();

  //newServerName = '';
  //newServerContent = '';
  @ViewChild("serverContent", {static: true}) serContent: ElementRef;

  constructor() { }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      name: serverName.value,
      content: this.serContent.nativeElement.value
    })
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: serverName.value,
      content: this.serContent.nativeElement.value
    })
  }

  ngOnInit(): void {
  }

}
