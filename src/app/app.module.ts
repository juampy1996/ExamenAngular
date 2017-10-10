import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import { Component6Component } from './component6/component6.component';
import { Component7Component } from './component7/component7.component';
import { FooterComponent } from './footer/footer.component';
import { Component9Component } from './component9/component9.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MapsServiceService } from './service/maps-service.service'
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    Component6Component,
    Component7Component,
    FooterComponent,
    Component9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule ,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUoR_MTfeibG_zs4_uhAzZtmZHpZ3eFmo'

    })
  ],
  providers: [MapsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
