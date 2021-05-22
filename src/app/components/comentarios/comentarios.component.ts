import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss'],
})
export class ComentariosComponent implements OnInit {

  @Input() comment: Comment={}

  constructor() { }

 ngOnInit() {}
 

}
