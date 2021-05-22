import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { PostsService } from '../services/posts.service';
import { MenuOption, Post } from '../interfaces/interfaces';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  post: Post[] = [];

  scrollActived = true;

  constructor(private postsService: PostsService) {}

  ngOnInit(){

    this.siguientes();
    
  }

  siguientes(event?, pull: boolean = false){

    if(pull){
      this.scrollActived =true;
      this.post = [];
    }
    this.postsService.getPoost(pull)
    .subscribe(resp =>{
      console.log(resp);
      this.post.push(...resp.post);

      if(event){
        event.target.complete();
        if(resp.post.length === 0){
            this.scrollActived =false;
         }
      }
    });
  }

  recargar(event){
    this.siguientes(event,true);
  }

}
