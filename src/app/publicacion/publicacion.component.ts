import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {
  @Input() imagenUsuario: string="";
  @Input() nombreUsuario: string="";
  @Input() textoPublicacion: string="";
  
  mobileView: boolean = false;

  constructor() { }

  ngOnInit() {
    this.onResize(); // Llama a onResize cuando se inicia el componente para establecer mobileView inicialmente
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.mobileView = window.innerWidth <= 1200; // Cambiar este valor según tus necesidades de diseño responsivo
  }

}
