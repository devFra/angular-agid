import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontSizeServiceService {

  private step: number = 2;
  private textSize: number = 13;
  private textSizeObserve: Observable<number>;

  constructor() { 
    this.textSizeObserve = Observable.create ( (observer:any) => {
      observer.next(this.textSize);
    });
  }

  getTextSize(): Observable<number> {
    return this.textSizeObserve;
  }

  private setTextSize(size: number){
    this.textSizeObserve = Observable.create ( (observer:any) => {
      this.textSize = size;
      observer.next(size);
    });
  }

  increseTextSize(){
    this.setTextSize(this.textSize + this.step);
  }

  decreseTextSize(){
    this.setTextSize(this.textSize - this.step);
  }
}
