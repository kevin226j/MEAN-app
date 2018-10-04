import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../app/views/dashboard/dashboard.component";
import {GenericComponent} from "../app/views/generic/generic.component";
import {PortfolioComponent} from "../app/views/portfolio/portfolio.component";
import {AdminComponent} from '../app/views/admin/admin.component';

const routes: Routes = [
  {path : '', redirectTo: '/dashboard', pathMatch : 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'generic', component: GenericComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'admin', component: AdminComponent}
]

@NgModule({
  exports : [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
