import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactosPageRoutingModule } from './contactos-routing.module';

import { ContactosPage } from './contactos.page';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactosPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [ContactosPage]
})
export class ContactosPageModule {}
