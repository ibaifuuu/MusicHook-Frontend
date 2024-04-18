import { Component, HostListener, OnInit } from '@angular/core';
import { ScreenSizeService } from '../servicios/ScreenSize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mobileView:boolean = false;

  constructor(private screenSize: ScreenSizeService) { }

  ngOnInit() {
    this.screenSize.isMobile().subscribe(isMobile => {
      this.mobileView = isMobile;
    });
  }
  
}
