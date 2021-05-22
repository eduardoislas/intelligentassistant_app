import { Injectable } from '@angular/core';
//import { FirebaseApp } from '@angular/fire';

import { AngularFireAuth } from "@angular/fire/auth";

import { HttpClientModule } from "@angular/common/http";
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import firebase from 'firebase/app';



//import { JwtHelperService } from "@auth0/angular-jwt";


//const helper= new JwtHelperService();
//const TOKEN_KEY='jwt-token'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private google: GooglePlus,
  constructor(public Afauth: AngularFireAuth, private google: GooglePlus, private http: HttpClientModule, private plt: Platform, private router: Router) { }

  /*login(email: string, pass: string) {

    return new Promise((resolve, rejected) => {
      this.Afauth.signInWithEmailAndPassword(email, pass).then(user =>
        resolve(user)
      ).catch(err => rejected(err));


    })



  }*/

  singup(email: string, pass: string) {
    return new Promise((resolve, rejected) => {
      this.Afauth.createUserWithEmailAndPassword(email, pass).then(user =>
        resolve(user)
      ).catch(err => rejected(err));


    })

  }
  logout() {
    this.Afauth.signOut()

  }


  async loginWithGoogle() {
    try {
      return this.Afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      
    } catch (error) {
      console.log(error)
      
    }


  /**
   * return this.google.login({}).then(res => {
      const user_data_google = res;

      //this.Afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
      return this.Afauth.signInWithCredential(firebase.auth.GithubAuthProvider.credential(user_data_google.accessToken));


      // this.Afauth.signInWithCredential(this.Afauth.GoogleAuthProvider.credential(null,user_data_google.accessToken));
      // auth.GoogleAuthProvider.credential(null,user_data_google.accesToken)




    })
  
  

*/



}



}


