import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { ContactPage } from '../contact/contact';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  rootPage:any = TabsPage;
  capturedSnapURL:any;
  latitude : any;
  longitude :any;
  cameraOptions: CameraOptions = {
   
   
    mediaType: this.camera.MediaType.PICTURE,
     quality: 100,
   destinationType: this.camera.DestinationType.DATA_URL,
   encodingType: this.camera.EncodingType.JPEG,
   saveToPhotoAlbum: true,

  }
  constructor(public navCtrl: NavController,private camera: Camera,private geolocation: Geolocation,) {

  }
  public getPicture() {  
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
       let base64Image = 'data:image/jpeg;base64,' + imageData; 
       this.capturedSnapURL = base64Image;
    
    });
    }  
    public localization() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude= resp.coords.latitude;
       this.longitude= resp.coords.longitude;
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }
    myLogOut(){
     
    }
}
