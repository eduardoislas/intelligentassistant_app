import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { map } from "rxjs/operators";


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient, private storage: Storage,private navCtrl: NavController){
  }

  token: string = null;
  usuario: Usuario ={};
  
  guardarStorageGoogle(token:string, usuario:Usuario){
    //localStorage.setItem('id',id)
    localStorage.setItem('token',token)
    localStorage.setItem('usuario',JSON.stringify(usuario))

    this.usuario=usuario;
    this.token=token;

  }
  loginGoogle(token:string){

      let url = environment.url+'/user/googlelogin/'

     return this.http.post(`${URL}/user/googlelogin`,{token})
          .pipe(map((resp:any)=>{

      this.guardarStorageGoogle(resp.token,resp.usuario);
      
      return true;
     }));
     
  }

  login(email: string, password: string){
    return new Promise(resolve =>{

      const data = {email,password};

      this.http.post(`${URL}/user/login`, data)
      .subscribe(async resp =>{
          console.log(resp);
          if(resp['ok']){
            this.storage.create();
            await this.guardarToken(resp['token']);
            resolve(true);
          }else{
            this.token =null;
            this.storage.clear();
            resolve(false);
          }
      });
    });
  }

  logout(){
    this.token = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('');

  }

  async guardarToken(token: string){
    this.token= token;
    await this.storage.set('token', token);

   await this.verificaToken();
  }

  async cargarToken(){
    this.storage.create();
    this.token = await this.storage.get('token')|| null;
  }

  async verificaToken(): Promise<boolean>{


   await this.cargarToken();
   if(!this.token){
     this.navCtrl.navigateRoot('')
      return Promise.resolve(false);
   }else{

    return new Promise<boolean>(resolve=>{

      const headers = new HttpHeaders({
        'x-token': this.token
      })
      this.http.get(`${URL}/user/`, {headers}).subscribe(resp=>{
        if(resp['ok']){
          this.usuario = resp['usuario'];
          resolve(true);
        }else{
          resolve(false);
        }
      });

    });
  }
  }

  register(usuario: Usuario ){
    return new Promise(resolve =>{

      this.http.post(`${URL}/user/create`,usuario)
      .subscribe(async resp =>{
        console.log(resp);
        if(resp['ok']){
          this.storage.create();
          await this.guardarToken(resp['token']);
          resolve(true);
        }else{
          this.token =null;
          this.storage.clear();
          resolve(false);
        }
      });
      
    })

  }


  update(usuario: Usuario ){

    const headers = new HttpHeaders({
      'x-token': this.token
    });
    return new Promise(resolve =>{
       
      this.http.post(`${URL}/user/update`,usuario,{headers})
      .subscribe(async resp =>{
        console.log(resp);
        if(resp['ok']){
          this.storage.create();
          await this.guardarToken(resp['token']);
          resolve(true);
        }else{
          this.token =null;
          this.storage.clear();
          resolve(false);
        }
      });
      
    })

  }
}