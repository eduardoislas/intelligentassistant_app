import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MenuOption, RespuestaPerfil } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
const URL= environment.url
@Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    
  
    constructor(private http: HttpClient ) { }
  
      // https://jsonplaceholder.typicode.com/users
      // http://localhost:3000/user/

      
    getUsers(){
       return this.http.get<any>(`${URL}/user/todos`); 
    }

    getMenuOptions(){
      return this.http.get<MenuOption[]>('/assets/data/menu.json');
    }

    getPublicaciones(){
     return this.http.get('https://newsapi.org/v2/everything?q=tesla&from=2021-02-20&sortBy=publishedAt&apiKey=7f1d83429c374ebfb22c9783c37d4a51')

    }
  
  
    
  }