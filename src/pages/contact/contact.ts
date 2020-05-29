import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';
import { TabsPage } from '../tabs/tabs';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  rootPage:any = TabsPage;
  image: null;
  latitude : any;
  longitude :any;
  typeS:'' ;
  typeN:'' ;
  description:'';
  Adresse:'';
  date:'';

  
  constructor( public navCtrl: NavController,private camera: Camera,private emailcomposer: EmailComposer , private geolocation: Geolocation,) {}

  public capturedPicture(){
    const options : CameraOptions = {
     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
     destinationType: this.camera.DestinationType.FILE_URI, 
    }
    this.camera.getPicture(options).then((imageData) => {
    this.image = imageData;
   
    });

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude= resp.coords.latitude;
       this.longitude= resp.coords.longitude;
      }).catch((error) => {
        console.log('Error getting location', error);
      });
  }
Send(){
  let email = {
    to: 'gestiondeprojetetreclamation@gmail.com',
    cc: 'gaiedhazem@gmail.com',
   
    attachments: [
   this.image
    ],
    subject: 'Photo',
    body: 'type de site=   '+ this.typeS + '   intervention de type =   ' + this.typeN + '   date de jour = '
    + this.date +
  '    localization: Latitude = '+ this.latitude +'   Longitude = '+ this.longitude
  + '    description: ' + this.description ,
    isHtml: true
  }
  
  // Send a text message using default options
  this.emailcomposer.open(email);
}
  }



 
 