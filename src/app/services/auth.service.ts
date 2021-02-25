import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from "@angular/fire/auth";
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Afauth: AngularFireAuth, private google: GooglePlus) { }

  login(email: string, pass: string) {

    return new Promise((resolve, rejected) => {
      this.Afauth.signInWithEmailAndPassword(email, pass).then(user =>
        resolve(user)
      ).catch(err => rejected(err));


    })


  }  

  loginGoogle(){

    
    return this.google.login({}).then(res => {
      const user_data_google = res;
      return this.Afauth.signInWithCredential(user_data_google.accesToken);
      //auth.GoogleAuthProvider.credential(null,user_data_google.accesToken)
    })
      
    

  }
  


}


