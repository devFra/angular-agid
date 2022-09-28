import { Injectable } from '@angular/core';
import { filter, map, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FontSizeServiceService {

  private step: number = 5;
  private textSizeDefaultMap: Map<string,number>;
  private textSizeMap: Map<string,number>;
  private textSizeMapObserve: Observable<Map<string,number>>;

  constructor() { 

    this.textSizeDefaultMap = new Map();
    this.textSizeMap = new Map();
  
    this.textSizeMapObserve = new Observable( (observer: Observer<Map<string,number>>) => {
      observer.next(this.textSizeMap);
    });
  }

  init(element: string, size: number){
    this.textSizeDefaultMap.set(element, size);
    this.setTextSize(element, size);
  }

  getTextSize(element: string): Observable<number | undefined> {
    return this.textSizeMapObserve
      .pipe(filter( e => e.has(element) ))
      .pipe(map( e => e.get(element) ));
  }

  private setTextSize(element: string, size: number){
    this.textSizeMapObserve = new Observable( (observer: Observer<Map<string,number>>) => {
      this.textSizeMap.set(element, size);
      observer.next(this.textSizeMap);
    })
  }

  increseTextSize(element: string){
    let size = (this.textSizeMap.get(element) ?? this.textSizeDefaultMap.get(element)! ) + this.step;
    this.setTextSize(element, size);
  }

  reduceTextSize(element: string){
    let size = (this.textSizeMap.get(element) ?? this.textSizeDefaultMap.get(element)! ) - this.step;
    this.setTextSize(element, size);
  }
}
