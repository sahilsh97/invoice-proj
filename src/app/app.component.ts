import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'invoice-proj';
  rent=0;
  electricity=0;
  extra=0;
  pump=0;
  totalAmount=0;

  onClickTotal(){
    this.totalAmount=this.rent+this.electricity+this.pump+this.extra;
  }
}
