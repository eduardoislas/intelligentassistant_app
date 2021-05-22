import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Identifiers } from '@angular/compiler';
import { NavController } from '@ionic/angular';
import { UsuarioService } from './usuario.service';
import { RespuestaComment, RespuestaFavorites } from '../interfaces/interfaces';


const URL = environment.url

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  paginaFavorite = 0;
  paginaPost = 0;

  constructor(private http: HttpClient, private usuarioService: UsuarioService, private navCtrl: NavController) { }


  getFavorites(pull: boolean = false){

    if(pull){
      this.paginaFavorite= 0;
    }

    this.paginaFavorite ++;


    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    return this.http.get<RespuestaFavorites>(`${URL}/favorite/?pagina=${this.paginaFavorite}` ,{headers})
      
  }

  favoritePost(post){

    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
   
    this.http.post(`${URL}/favorite/post` ,post,{headers})
    .subscribe(resp =>{
        console.log(resp);
      });
  }

  getComment(idpost,pull: boolean = false){

    if(pull){
      this.paginaPost = 0;
    }

    this.paginaPost ++;
    
    return this.http.get<RespuestaComment>(`${URL}/favorite/comments/` +idpost);
  }

  eliminarFavorite(id){

    this.http.delete(`${URL}/favorite/delete/` +id)
    .subscribe(resp=>{
      console.log(resp);
    })

  }

  comentarFavorite(idpost,comment){

    this.http.post(`${URL}/favorite/comment/` +idpost,comment).subscribe(resp=>{
      console.log(resp);
    })

  }

}
