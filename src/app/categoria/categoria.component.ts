import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  
  nombreCategoria: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      this.nombreCategoria = params.get("nombre") || ""; // Actualizamos el valor con el parámetro de la URL      // Aquí podrías cargar los datos específicos de la categoría, por ejemplo, desde un servicio.
    });
  }

}
