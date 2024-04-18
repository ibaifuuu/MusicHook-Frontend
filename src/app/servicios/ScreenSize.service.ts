import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private mobileWidthThreshold = 1200;

  constructor() { }

  isMobile(): Observable<boolean> {
    return fromEvent(window, 'resize').pipe(
      startWith(this.getIsMobile()),
      map(() => this.getIsMobile())
    );
  }

  private getIsMobile(): boolean {
    return window.innerWidth <= this.mobileWidthThreshold;
  }
}
