import { Component } from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { DashboardPage } from '../dashboard/dashboard.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  provider = new firebase.auth.GoogleAuthProvider();
  loginForm;

  constructor(private formBuilder: FormBuilder,
              private navCtrl: NavController,
              private router: Router) {
    // Initialize Firebase
    firebase.initializeApp(environment.firebase);
    this.provider = new firebase.auth.GoogleAuthProvider();
    this.loginForm = this.formBuilder.group({
    });    
  }

  public doLogin() {
    firebase.auth().signInWithPopup(this.provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential;//.accessToken
      // The signed-in user info.
      var user = result.user;
      // ...
      this.router.navigateByUrl('/dashboard');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(error);
    });    
  }
}
