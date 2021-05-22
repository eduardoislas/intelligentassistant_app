import { Component, Input, OnInit } from '@angular/core';
import {Comment} from 'src/app/interfaces/interfaces'

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss'],
})
export class ComentarioComponent implements OnInit {
 
  @Input() public comment: Comment[] = [];

  constructor() { }

  ngOnInit() {

    console.log('ya esta llamandolo',this.comment);
  }

}
