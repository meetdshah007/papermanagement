import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index/index";
import {ContactPage} from "../contact/contact";
import {Http} from "@angular/http";
import {InsertpaperPage} from "../insertpaper/insertpaper";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  dismiss(){
    this.navCtrl.setRoot(ContactPage);

  }
  submit(){

    this.navCtrl.setRoot(InsertpaperPage);

  }
}
