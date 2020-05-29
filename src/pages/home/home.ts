import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';
import { ContactPage } from '../contact/contact';
import { TabsPage } from '../tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';
import { GooglePlus } from '@ionic-native/google-plus';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage:any = TabsPage;
  image: null;
  latitude : any;
  longitude :any;
  typeS:'' ;
  typeN:'' ;
  description:'';
  Adresse:'';
  date:'';

  
  constructor(public navCtrl: NavController,private camera: Camera,private emailcomposer: EmailComposer , private geolocation: Geolocation,private googlePlus: GooglePlus,) {}

  myLogIn() {
    this.googlePlus.login({})
    .then(res => console.log(res))
    .catch(err => console.error(err));
    }
   
  myLogOut(){
   
  }
}


 