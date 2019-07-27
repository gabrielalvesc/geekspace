import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';  
import { RequestsComponent } from './components/requests/requests.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { AuthGuard } from './security/auth.guard';
import { FinishComponent } from './components/finish/finish.component';
import { HomeComponent } from './home/home.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AdminGuard } from './security/admin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'carrinho', component: ShoppingCartComponent},
  {path: 'produto/:id', component: ShowProductComponent},
  {path: 'conta', component: AccountComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    {path: 'meus-pedidos', component: RequestsComponent},
    {path: 'meus-favoritos', component: FavoritesComponent},
    {path: 'novo-produto', component: NewProductComponent, canActivate:[AdminGuard]}
  ]},
  {path: 'finalizar-pedido', component: FinishComponent, canActivate: [AuthGuard]},
  {path: 'confirmacao', component: ConfirmationComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
