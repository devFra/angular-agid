import { Component } from '@angular/core';
import { FontSizeServiceService } from 'src/services/font-size-service/font-size-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-agid';

  constructor(
    public fontSize: FontSizeServiceService
  ){}

}
