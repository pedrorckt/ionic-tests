import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Media, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  audio: MediaObject;

  constructor(public navCtrl: NavController, private media: Media) {
    //
  }

  play() {
    let url = "http://classicoims.out.airtime.pro:8000/classicoims_a"; //"http://rckt.com.br/audio.mp3";
    this.audio = this.media.create(url);
    // to listen to plugin events:
    this.audio.onStatusUpdate.subscribe(status => console.log('Status ' + status)); // fires when file status changes, BUT NOT STATUS 1
    this.audio.onSuccess.subscribe(() => console.log('Action is successful')); // fires on stop/release, but not on play
    this.audio.onError.subscribe(error => console.log('Error!'));
    // play the file
    this.audio.play();
  }

  stop() {
    this.audio.stop();
  }

}
