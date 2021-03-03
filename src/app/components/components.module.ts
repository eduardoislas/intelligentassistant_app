import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from "./tabs/tabs.component";




@NgModule({
  declarations: [HeaderComponent, MenuComponent,TabsComponent],
  exports: [HeaderComponent, MenuComponent,TabsComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
