import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.boottom()

  }

  boottom(){
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
button?.addEventListener('click',()=>{
   menu?.classList.toggle('hidden');
})
  }
}
