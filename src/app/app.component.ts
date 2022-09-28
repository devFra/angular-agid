import { Component } from '@angular/core';
import { FontSizeServiceService } from 'src/services/font-size-service/font-size-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-agid';

  // Text tag increse 
  textType = {
    title: 'title',
    body: 'body'
  }

  constructor(
    public fontSize: FontSizeServiceService
  ){
    this.fontSize.init(this.textType.title, 23);
    this.fontSize.init(this.textType.body, 11);
  }

}
