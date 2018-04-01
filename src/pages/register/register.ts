import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {IndexPage} from "../index/index";
import {ContactPage} from "../contact/contact";
import {InsertpaperPage} from "../insertpaper/insertpaper";
import { ServicesProvider } from '../../providers/services/services';

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
  title: string = "Add Customer";
  custForm: FormGroup;
  apiUrl: string = "insertcustomer.php";
  submited: boolean = false;
  userId: string;
  custData: object = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    alt_contact: ''
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public services: ServicesProvider,    
    public formBuilder: FormBuilder    
  ) {
    this.custForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      mobile: ['', Validators.compose([Validators.required])],
      alt_contact: ['']      
    });
  }

  ionViewWillEnter(){
    console.log("=== Params Data ===>", this.navParams);
    let custData = this.navParams.data;
    this.services.getUserData().then(data=>{
      this.userId = data.user_id;
      if(custData){
        this.custData = custData;
        this.title = "Profile";
        this.apiUrl = "updatecustomer.php"
      }else{
        this.title = "Add Customer";
        this.apiUrl = "insertcustomer.php"
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  dismiss(){
    this.navCtrl.pop();

  }
  submit(){
    if (!this.custForm.valid) {
      this.submited = true;
      return false;
    }

    

    this.services.post(this.apiUrl, this.custForm.value).subscribe((res: any) => {
      if (res.success) {
        this.services.setUserData(res.data);
        this.services.setLogged();
        this.navCtrl.setRoot (IndexPage);        
      }else{
        this.services.createWaring('Error',res.error);
      }
    }, (err) => {
      console.log("Error", err);
      const errMsg = err.message || 'Something is wrong with the network.';
      this.services.createWaring('Error', errMsg);
    });

    this.navCtrl.setRoot(InsertpaperPage);

  }
}
