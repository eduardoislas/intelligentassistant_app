import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-cuadropublicacion',
  templateUrl: './cuadropublicacion.component.html',
  styleUrls: ['./cuadropublicacion.component.scss'],
})
export class CuadropublicacionComponent implements OnInit {

  constructor(private http: HttpClient, private postsService: PostsService, private uiService: UiServiceService) { }
  poost= {
    title: '',
    description: '',
  };

  ngOnInit(){

  }

  async crearPoost(){

    const valido = await this.postsService.crearPost(this.poost);

    if(valido !=null){
      this.uiService.alertMenssage('Publicando'); 
    }
    else{
      this.uiService.alertMenssage('Introduce los campos correctamente'); 
    }
  }

}

