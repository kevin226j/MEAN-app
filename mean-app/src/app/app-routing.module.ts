import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../app/dashboard/dashboard.component";
import {GenericComponent} from "../app/generic/generic.component";
import {PortfolioComponent} from "../app/portfolio/portfolio.component";

const routes: Routes = [
  {path : '', redirectTo: '/dashboard', pathMatch : 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'generic', component: GenericComponent},
  {path: 'portfolio', component: PortfolioComponent}
]

@NgModule({
  exports : [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
