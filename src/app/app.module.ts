import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { firebaseConfig } from 'src/environments/environment';

import { IonicStorageModule } from '@ionic/storage-angular'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GooglePlus } from "@ionic-native/google-plus/ngx";
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PipesModule } from './pipes/pipes.module';
const config: SocketIoConfig = { url: 'http://localhost:3000/', options: {} };

 
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [PipesModule,BrowserModule, ComponentsModule, RouterModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,HttpClientModule,IonicStorageModule.forRoot(),FormsModule, SocketIoModule.forRoot(config)],
  providers: [StatusBar,SplashScreen, CallNumber, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },GooglePlus],
  bootstrap: [AppComponent],
})
export class AppModule {}
