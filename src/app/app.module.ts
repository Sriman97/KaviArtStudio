import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NgbdCarouselConfig } from './carousel/carousel';
import { StudentComponent } from './student/student.component';
import { TailoringComponent } from './tailoring/tailoring.component';
import { PaintingComponent } from './painting/painting.component';
import { MediaComponent } from './media/media.component';
import { UpdatesComponent } from './updates/updates.component';


@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      AboutComponent,
      TestimonialsComponent,
      GalleryComponent,
      ContactComponent,
      FooterComponent,
      NgbdCarouselConfig,
      StudentComponent,
      TailoringComponent,
      PaintingComponent,
      MediaComponent,
      UpdatesComponent
   ],
   imports: [
      NgbModule,
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
