import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PerfilUsuarioComponent } from '../components/perfil-usuario/perfil-usuario.component';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  usuarios: any[]=[];
  textoBuscar = '';
  

  constructor(private modalCtrl: ModalController,private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(usuarios =>{

      console.log(usuarios)

      this.usuarios=usuarios;

    });


   

  }

  async verUsuarioPerfil(usuario){
    const modal = await this.modalCtrl.create({
      component: PerfilUsuarioComponent,
      componentProps:{
        usuario
      }
    })
    modal.present();
   }
  buscar(event){
    this.textoBuscar=event.detail.value
  }

}