import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}


  async verPerfilUsuario(usuario){
    const modal = await this.modalCtrl.create({
      component: PerfilUsuarioComponent,
      componentProps:{
        usuario
      }
    })
    modal.present();
   }

  }


