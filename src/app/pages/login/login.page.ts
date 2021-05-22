import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  auth2:any;

  loginUser = {
    email: 'marioxbarreras@gmail.com',
    password: '123456'
  }

  registerUser={
    email: '',
    password:'',
    nombre:''
  }
  
  constructor(private usuarioService: UsuarioService,
              private navTabs: NavController, private uiService: UiServiceService) { }

  ngOnInit() {
    this.googleInit();
  }


  googleInit(){
    gapi.load('auth2',()=>{
      this.auth2=gapi.auth2.getAuthInstance({
        client_id:'714892732929-p4ggm5cfdvd8ss219cq5kg6r6uc1cpk3.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope:'profile email'
      });


      this.attachSignIn(document.getElementById('btnGoogle'));
    });


    
  }

  attachSignIn(element){
    
    this.auth2.attachClickHandler(element,{},googleUser=>{
     // let profile=googleUser.getBasicProfile();

     let profile = googleUser.getBasicProfile();
      let token= googleUser.getAuthResponse().id_token;

      console.log(profile)

      console.log()
      
      this.usuarioService.loginGoogle(token)
      .subscribe(()=>{ 
        this.navTabs.navigateRoot('/tabs/tab1')
      })
      
    });

    
      
  }


  

  registrar2(){
    this.navTabs.navigateRoot('register')

  }

  async login(fLogin: NgForm) {
    if(fLogin.invalid){
      return;
    }
    const valido = await this.usuarioService.login(this.loginUser.email, this.loginUser.password);

    if(valido){
      this.navTabs.navigateRoot('/tabs/tab1')
    }else{
      this.uiService.alertMenssage('Usuario/contrasenia no son correctas'); 
    }


  }

  async register(fRegister: NgForm){
    if(fRegister.invalid){
      return;
    }
   const valido = await this.usuarioService.register(this.registerUser);

   if(valido){
      this.navTabs.navigateRoot('/tabs/tab1')
    }
    else{
      this.uiService.alertMenssage('El correo ya existe'); 
    }
  }
}

