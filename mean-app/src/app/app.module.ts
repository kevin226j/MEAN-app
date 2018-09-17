import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// views
import {DashboardComponent} from './dashboard/dashboard.component';

//components
import {BannerComponent} from './components/banner/app.banner.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
