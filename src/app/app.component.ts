import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'online-shop-app';
  
  onInit(){
    console.log(document.documentElement.scrollHeight)
  } 
}
