import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-horizontal',
  templateUrl: './navbar-horizontal.component.html',
  styleUrls: ['./navbar-horizontal.component.css']
})
export class NavbarHorizontalComponent implements OnInit {
  genres = ['Rock', 'Pop', 'Rap', 'Electrónica', 'Clásica', 'Jazz', 'Reggae', 'Country', 'Indie', 'Blues', 'Metal', 'Folk', 'R&B', 'Alternativa'];
  
  slickConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false
  };

  constructor() { }

  ngOnInit() {
  }

}
