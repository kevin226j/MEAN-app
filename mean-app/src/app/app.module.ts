import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// views
import {DashboardComponent} from './dashboard/dashboard.component';
import {GenericComponent} from './generic/generic.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
}
