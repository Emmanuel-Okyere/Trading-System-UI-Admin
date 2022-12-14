import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import {UsersComponent} from "./users/users.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {SystemLogComponent} from "./system-log/system-log.component";

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'profile', component: ProfileComponent},
  {path:'market-data', component: OrdersComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'users', component: UsersComponent},
  {path:'user-portfolios', component: PortfolioComponent},
  {path:'system-logs', component: SystemLogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
