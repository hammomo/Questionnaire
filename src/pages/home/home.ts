import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormatOnePage } from '../format-one/format-one';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  clickOne() {
    this.navCtrl.push(FormatOnePage);
  }
}
