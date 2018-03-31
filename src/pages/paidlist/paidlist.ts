import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index/index";
import {BillingPage} from "../billing/billing";

/**
 * Generated class for the PaidlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-paidlist',
  templateUrl: 'paidlist.html',
})
export class PaidlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaidlistPage');
  }
  dismiss(){

    this.navCtrl.setRoot(BillingPage)

  }

}
