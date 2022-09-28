import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontSizeServiceService } from 'src/services/font-size-service/font-size-service.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FontSizeServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
