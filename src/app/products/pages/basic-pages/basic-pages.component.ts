import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
  styleUrls: ['./basic-pages.component.css']
})
export class BasicPagesComponent {

  public nameLower:string = 'hector';
  public nameUpper:string = "HECTOR";
  public fullName: string = " HecTor aRdiLa";

  public customDate:Date= new Date();
}
