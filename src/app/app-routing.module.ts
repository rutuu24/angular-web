import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { TrainersComponent } from './trainers/trainers.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "trainers", component: TrainersComponent },
  { path: "courses", component: CoursesComponent },
  { path: "events", component: EventsComponent },
  { path: "pricing", component: PricingComponent },
  { path: "contact", component: ContactComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent,
  AboutComponent,
  TrainersComponent,
  CoursesComponent,
  EventsComponent,
  PricingComponent];
 
