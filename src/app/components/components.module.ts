import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import {TabsComponent  } from "./tabs/tabs.component";



@NgModule({
  declarations: [HeaderComponent,TabsComponent],
  exports: [HeaderComponent,TabsComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
