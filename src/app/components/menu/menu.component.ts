import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MenuOption } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { PostsService } from 'src/app/services/posts.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  options: Observable<MenuOption[]>;

  constructor(private menuCtrl:MenuController,private dataService: DataService, private menu: MenuController, private usuarioService: UsuarioService, private postService: PostsService) {
    this.menu.enable(true, 'first');
   }

  ngOnInit() {
   this.options = this.dataService.getMenuOptions();
  }

  toggleMenu(){
    this.menuCtrl.toggle();

  }

  logout(){
    this.postService.paginaPost = 0;
    this.usuarioService.logout();
    

  }
}
