import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:string;
  pass:string;
  name:string;

  constructor(private auth:AuthService, public router:Router) {}

  ngOnInit() {
  }

  onSubmitLogIn(){
    this.auth.login(this.email,this.pass).then(res=>{
      this.router.navigate(['inicio']);

    }).catch(err=> alert('Datos son incorrectos o no existen'))
   

  }

  loginGoogle(){
    this.auth.loginGoogle().then().then(res=>{
      this.router.navigate(['/inicio']);

    }).catch(err=> alert('Chingadamadre'))
   

  }

  }

  


