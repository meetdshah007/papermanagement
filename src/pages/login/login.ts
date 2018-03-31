import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AddPaper } from "../addpaper/addpaper";
import { IndexPage } from "../index/index";
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: FormGroup;
  submited: boolean = false;
  
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public services: ServicesProvider,
    public formBuilder: FormBuilder    
  ) {
    this.services.getLogged().then((res) => {
      if (res) this.navCtrl.setRoot(IndexPage);
    });

    this.login = formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  doLogin() {
    if (!this.login.valid) {
      this.submited = true;
      return false;
    }
    
    this.services.post('login.php', this.login.value).subscribe((res) => {
      console.log("== res ==>", res);
    });
    //this.navCtrl.setRoot (IndexPage);
  }
}
