import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import  {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {path : "dashboard" , component:DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];
//The @NgModule metadata initializes the router and starts it listening for browser location changes.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
