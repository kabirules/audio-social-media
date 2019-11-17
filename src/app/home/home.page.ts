import { Component } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firebaseAuthentication: FirebaseAuthentication) {}

  public doLogin() {
    this.firebaseAuthentication.signInWithGoogle('','')
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));  
  }
}
