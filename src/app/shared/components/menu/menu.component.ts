import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public items: MenuItem[] = [];

    constructor() {}

    ngOnInit() {
      this.items = [
        {
          label: 'Pipes de angular',
          icon: 'pi pi-desktop',
          items:[
            {
              label: 'Textos y fechas',
             icon: 'pi pi-align-left',
             routerLink: '**'
            },
            {
              label: 'Numeros',
             icon: 'pi pi-dollar',
             routerLink:'numbers'
            },
            {
              label: 'No comunes',
             icon: 'pi pi-globe',
             routerLink: 'uncommon'
            },

          ]
      },
      {
        label:'Pipes personalizados',
        icon: 'pi pi-cog',
        items:[
          {
            label:'custom pipes',
            icon: 'pi pi-cog',
            routerLink:'custom'
          }
        ]
      }
      ];
  }



}
