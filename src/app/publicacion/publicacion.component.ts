import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ScreenSizeService } from '../servicios/ScreenSize.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})

export class PublicacionComponent implements OnInit {
  @Input() imagenUsuario: string="";
  @Input() nombreUsuario: string="";
  @Input() textoPublicacion: string="";
  @Input() categoria:string = "";
 
  mobileView: boolean = false;

  constructor(private screenSize: ScreenSizeService) { }

  ngOnInit() {
    this.screenSize.isMobile().subscribe(isMobile => {
      this.mobileView = isMobile;
  });
}

}
