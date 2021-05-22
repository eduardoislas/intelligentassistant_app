import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ToastController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { UsuarioService } from '../services/usuario.service';
const URL=environment.url
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {
  message= '';
  messages=[];
  currentUser='';
  usuario:Usuario={};
  @ViewChild(IonContent) content: IonContent
  
  

  constructor(private http:HttpClient,private socket:Socket, private toastCtrl:ToastController, private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.socket.connect();

    const headers= new HttpHeaders({
    'x-token':this.usuarioService.token
    })

    this.http.get(`${URL}/user/`,{headers}).subscribe(resp=>{
      if(resp['ok'])
      this.usuario=resp['usuario']
      
       const name= this.usuario.nombre
     
      
       this.socket.emit('set-name', name);
      
 
    })
    

     
      
    //let name = `user-${new Date().getTime()}`;
    //let name = header.get.toString()
    
    
    
    
    
    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + name);
      } else {
        this.showToast('User joined: ' + name);
      }
    });
 
    this.socket.fromEvent('message').subscribe(message => {
      this.messages.push(message);
      this.content.scrollToBottom(0);
    });

    this.socket.fromEvent('mesage').subscribe(message=>{
      this.messages.push(message)
      this.content.scrollToBottom(0);
    })


    
}

ionViewWillLeave() {
  this.socket.disconnect();
}


sendMessage() {
  this.socket.emit('send-message', { text: this.message });
  this.message = '';
  this.content.scrollToBottom(0);
}

async showToast(msg) {
  let toast = await this.toastCtrl.create({
    message: msg,
    position: 'top',
    duration: 2000
  });
  toast.present();
}

}

