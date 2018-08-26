import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',//custome element/tag selector
    // selector :'[app-server]',//custome attribute selector
    // selector :'.app-server',//custome class selector 
    templateUrl: './server.component.html',
    styles: [`
    .online_class {
        color : white
    }
    `]

})

export class ServerComponent implements OnInit {
    constructor() {
        let valueGener = Math.random()
        this.serverStatus = valueGener > 0.5 ? 'online' : 'offline'
        console.log(valueGener);
    }

    ngOnInit() { }

    serverId: number = 10;
    serverStatus: string = "Offline";

    getServerStatus() {
        return this.serverStatus;
    }

    getColorBasedOnState() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }

    citiesArray = ['HSR', 'Agara']

    onClickAddCity() {
        return this.citiesArray.push('kormangala')
    }
    
    countArray = [];
    isBtnDisabled = false;
    onClickCountNumber() {
        if (this.countArray.length >= 10) {
            return this.isBtnDisabled = true
        }
        return this.countArray.push(this.countArray.length + 1);
    }
}