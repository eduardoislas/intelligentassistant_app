import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Post, RespuestaPosts, RespuestaComment } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';


const URL = environment.url;


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPost = 0;

  constructor(private http: HttpClient, private usuarioService: UsuarioService, private navCtrl: NavController) { }


  getPoost(pull: boolean = false) {

    if (pull) {
      this.paginaPost = 0;
    }

    this.paginaPost++;

    return this.http.get<RespuestaPosts>(`${URL}/post/?pagina=${this.paginaPost}`)
  }

  getComment(id, pull: boolean = false) {

    if (pull) {
      this.paginaPost = 0;
    }

    this.paginaPost++;

    return this.http.get<RespuestaComment>(`${URL}/post/comments/` + id)
  }

  crearPost(post) {
    return new Promise<boolean>(resolve => {
      const headers = new HttpHeaders({
        'x-token': this.usuarioService.token
      });

      this.http.post(`${URL}/post/posts`, post, { headers })
        .subscribe(resp => {
          if(resp['ok']){
            resolve(true);
          }else{
            resolve(false)
          }
        });

    });
  }


  eliminarPost(id) {

    this.http.delete(`${URL}/post/delete/` + id)
      .subscribe(resp => {
        console.log(resp)
      })

  }

  comentarPost(id, comment) {

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    this.http.post(`${URL}/post/comment/` + id, comment)
      .subscribe(resp => {
        console.log(resp)
      });
  }
}
