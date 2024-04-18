import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobileView:boolean = false;

  constructor() { }

  ngOnInit() {
  }


  
  @HostListener('window:resize', ['$event'])
  onResize(event:Event) {
    this.mobileView = window.innerWidth <= 1200; // Cambiar este valor según tus necesidades de diseño responsivo
  }

}
