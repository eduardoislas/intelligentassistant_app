import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interfaces';
import { User } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';
//import { Storage } from '@ionic/storage';
const URL=environment.url


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  usuario:Usuario={};
  
  segment: Boolean = true;


  updatedUser = {
    //email: '',
   // password: '',
    nombre: '',
    fechaNaci: null,
    tiempoCuidado: '',
    relacion: '',

  }
  // @ViewChild('barCanvas') barCanvas: ElementRef;

  // private barChart: Chart;
  // bars: Chart;
  // colorArray: any;

  constructor(private http:HttpClient,private usuarioService:UsuarioService,
    private navTabs: NavController/*private storage: Storage*/) {
    /*this.storage.get('usuario').then((val) => {
      this.user = val;
    })*/
   }

   ngOnInit() {
    this.cambiarSegment(1);

    const headers= new HttpHeaders({
      'x-token':this.usuarioService.token
      })

      this.http.get(`${URL}/user/`,{headers}).subscribe(resp=>{
        if(resp['ok'])
        this.usuario=resp['usuario']
        
         const name= this.usuario.nombre
       
        
         
        
   
      })
  }

  segmentChanged(event){
    var valorSegmento = event.detail.value;
    this.cambiarSegment(valorSegmento);
  }

  cambiarSegment(valorSegmento: number){
    if (Number(valorSegmento) === 1){
      this.segment = true;
    }else{
      this.segment = false;
    }
  }


  async update(fUpdate: NgForm) {
    if (fUpdate.invalid) {
      return;
    }
    const valido = await this.usuarioService.update(this.updatedUser);

    if (valido) {
      this.navTabs.navigateRoot('/tabs/tab1')
    }
    // else {
    //   this.uiService.alertMenssage('El correo ya existe');
    // }
  }

  // ionViewDidEnter() {
  //   this.createBarChart();
  // }

  // createBarChart() {
  //   this.barChart = new Chart(this.barCanvas.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
  //       datasets: [{
  //         label: 'Viewers in millions',
  //         data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
  //         backgroundColor: 'rgb(38, 194, 129)', // array should have same number of elements as number of dataset
  //         borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });
  // }

}
