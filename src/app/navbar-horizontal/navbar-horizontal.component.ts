import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../servicios/ScreenSize.service';

@Component({
  selector: 'app-navbar-horizontal',
  templateUrl: './navbar-horizontal.component.html',
  styleUrls: ['./navbar-horizontal.component.css']
})
export class NavbarHorizontalComponent implements OnInit {
  genres = ['Rap', 'R&B', 'Hip-hop', 'Reggaeton', 'Dancehall', 'Grime', 'Afrobeat', 'Soca', 'Funk', 'Soul', 'Dance', 'House']
  mobileView:boolean=false;


  slickConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false
  };

  

  constructor(private screenSize: ScreenSizeService) { }

  ngOnInit() {
    this.screenSize.isMobile().subscribe(isMobile => {
      this.mobileView = isMobile;
    });
  }

}
