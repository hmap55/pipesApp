import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  changeClient():void{
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18plural
  public clients: string[]= ['Maria', 'Pedro', 'Juan', 'Carlos', 'Diego', 'Francisco', 'Olga', 'Laura', 'Gladys', 'Hector'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift();

    }

     //keyValue pipe

     public person ={
      name: 'hector',
      age: 33,
      address: 'Bogota, colombia'
     }

     //async pipe

     public myObservableTimer = interval(2000).pipe();

     public promiseValue:Promise<string> = new Promise((resolve, reject) =>{
      setTimeout( ()=>{
        resolve('tenemos data en la promesa')
      }, 3500);
     })

}
