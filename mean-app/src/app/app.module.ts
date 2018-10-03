import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// views
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {GenericComponent} from './views/generic/generic.component';
import {PortfolioComponent} from './views/portfolio/portfolio.component';

//services
import {RESTService} from './services/rest.service';
import {DemoService} from './services/api/demo/demo.service';
import {GmailService} from './services/api/gmail/gmail.service';

//components
import {BannerComponent} from './components/banner/app.banner.component';
import {FooterComponent} from './components/footer/app.footer.component';
import {GalleryComponent} from './components/gallery/app.gallery.component';
import {AboutComponent} from './components/about/app.about.component';
import {ContactComponent} from './components/contact/app.contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GenericComponent,
    PortfolioComponent,
    BannerComponent,
    FooterComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [DemoService,GmailService],
  bootstrap: [AppComponent],
})
export class AppModule { 
}
