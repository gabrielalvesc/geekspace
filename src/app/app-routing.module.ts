import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { RequestsComponent } from './components/requests/requests.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component:HighlightsComponent},
  {path:'dashboard', component:DashboardComponent,
  children:[
    {path:'meus-pedidos', component:RequestsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
