import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController, AlertController } from 'ionic-angular';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {
  public BASE_URL = `http://delieverymanagementsystems.net/`;
  public API_URL = `${this.BASE_URL}dev/`;
  public options: any;
  private headers = {
    "Accept": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": 'POST, GET, OPTIONS, PUT'
  }

  constructor(
    public http: HttpClient,
    public toastCtrl: ToastController,
    public storage: Storage,
    public alertCtrl: AlertController
  ) {
    this.options = new HttpHeaders(this.headers);
    console.log('Hello ServicesProvider Provider');
  }

  createWaring(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  getUserData() {
    return this.storage.get('user');
  }

  setUserData(data: any) {
    return this.storage.set('user', data);
  }

  setLogged() {
    return this.storage.set('isLoggedIn', true);
  }

  getLogged() {
    return this.storage.get('isLoggedIn');
  }

  /**
   * API handling
   * @param url 
   * @param data 
   */
  post(url: string, data: any) {
    let form_data = new FormData(),
        key;

    for (key in data) {
      form_data.append(key, data[key]);
    }
    return this.http.post(this.API_URL + url, form_data, this.options);
  }

  get(url: string) {
    return this.http.get(this.API_URL + url, this.options);
  }

  delete(url: string) {
    return this.http.delete(this.API_URL + url, this.options);
  }

  put(url: string, data: object) {
    return this.http.put(this.API_URL + url, data, this.options);
  }
  /** API Handling */


  alertWithInput(title, inputs, btnText, action, scope) {
    let alert = this.alertCtrl.create({
      title: title,
      inputs: inputs || [],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => { }
      }, {
        text: btnText,
        handler: data => {
          action(data, scope);
        }
      }]
    });

    alert.present();
    return false;
  }

  presentToast(msg: string){
    let toast = this.toastCtrl.create({
      duration: 3000,
      position: 'top',
      message: msg
    });
    toast.present();
  }
}
