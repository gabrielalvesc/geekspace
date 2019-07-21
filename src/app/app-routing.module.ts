import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';  
import { RequestsComponent } from './components/requests/requests.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { NewProductComponent } from './components/new-product/new-product.component';

const routes: Routes = [
  {path:'', component:HighlightsComponent},
  {path: 'carrinho', component: ShoppingCartComponent},
  {path: 'produto/:id', component:ShowProductComponent},
  {path:'dashboard', component:DashboardComponent,
  children:[
    {path:'meus-pedidos', component:RequestsComponent},
    {path:'meus-favoritos', component:FavoritesComponent},
    {path:'novo-produto', component:NewProductComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
