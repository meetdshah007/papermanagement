import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {IndexPage} from "../index/index";
import {AddPaper} from "../addpaper/addpaper";

/**
 * Generated class for the PaperlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-paperlist',
  templateUrl: 'paperlist.html',
})
export class PaperlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaperlistPage');
  }
  dismiss(){
    this.navCtrl.setRoot(IndexPage);

  }

  addpaper(){

    this.navCtrl.setRoot(AddPaper)
  }
}
