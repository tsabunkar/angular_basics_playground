import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string = 'No server was created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was finally created!! name is ' + this.serverName
  }

  serverName = "Tejas Sabunkar home Server"
  onUpdateServerName(event: Event) { //this event varaible is eqvialent to $event

    // console.log('$event', event);
    // this.serverName = event.target.value;
    /*     This value prop is only avaliable bcoz- event is on input elemet/tag
        Therefore we can Use Generice like below saying it is input Element */
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  bindingTextBox = "";

  serverCreated = false;

  onCheckOfCheckBox() {
    this.serverCreated = !this.serverCreated;
  }

}

