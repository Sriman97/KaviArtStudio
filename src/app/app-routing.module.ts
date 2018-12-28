import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';
import { PaintingComponent } from './painting/painting.component';
import { TailoringComponent } from './tailoring/tailoring.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'students', component: StudentComponent },
  { path: 'p_d', component: PaintingComponent },
  { path: 't_e', component: TailoringComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
