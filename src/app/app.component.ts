import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invoice-proj';
  rent=0;
  extra=0;
  water=0;
  totalAmount=0;
  newUnits=0;
  currentUnits=0;
  unitRate=0;
  sweeperAmount=0;
  electricity=0;

  onClickTotal(){
    this.electricity=(this.newUnits-this.currentUnits)*this.unitRate;
    this.totalAmount=this.rent+this.electricity+this.water+this.extra+this.sweeperAmount;
  }
}
