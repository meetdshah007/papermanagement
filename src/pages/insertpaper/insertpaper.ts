import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from "../register/register";

/**
 * Generated class for the InsertpaperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-insertpaper',
  templateUrl: 'insertpaper.html',
})
export class InsertpaperPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertpaperPage');
  }
  dismiss() {
    this.navCtrl.setRoot(RegisterPage);

  }

  submit() {

    this.navCtrl.setRoot(InsertpaperPage);
    var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
    // var myData = JSON.stringify({username: this.data.username});
    /*
    this.http.post(link, myData)
      .subscribe(data => {
        this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
      }, error => {
        console.log("Oooops!");
      });
    */
  }
}
