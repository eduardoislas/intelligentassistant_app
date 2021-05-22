import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email: string;
  pass: string;
  name: string;
  fechaNaci: Date = new Date();

  registerUser = {
    email: '',
    password: '',
    nombre: '',
    fechaNaci: null,
    tiempoCuidado: '',
    relacion: '',

  }

  constructor(private usuarioService: UsuarioService,
    private navTabs: NavController, private uiService: UiServiceService) { }

  ngOnInit() {
  }


  //   onSubmitSignUp(){


  //     this.auth.singup(this.email,this.pass).then(res=>{
  //       this.router.navigate(['tabs']);

  //     }).catch(err=> alert('Datos son incorrectos'))
  // }


  async register(fRegister: NgForm) {
    if (fRegister.invalid) {
      return;
    }
    const valido = await this.usuarioService.register(this.registerUser);

    if (valido) {
      this.navTabs.navigateRoot('/tabs/tab1')
    }
    else {
      this.uiService.alertMenssage('El correo ya existe');
    }
  }


  
}
