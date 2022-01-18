import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponentComponent },
  {path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
