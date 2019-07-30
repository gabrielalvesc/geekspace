import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);

import { HighlightsComponent } from './components/highlights/highlights.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestsComponent } from './components/requests/requests.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RequestsService } from './services/requests.service';
import { FavoritesService } from './services/favorites.service';
import { NewProductComponent } from './components/new-product/new-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './security/auth.guard';
import { FinishComponent } from './components/finish/finish.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { SaleService } from './services/sale.service';
import { AdminGuard } from './security/admin.guard';

import { AboutComponent } from './components/about/about.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { FooterComponent } from './components/footer/footer.component';
import { MysalesComponent } from './components/mysales/mysales.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightsComponent,
    ShoppingCartComponent,
    HeaderComponent,
    DashboardComponent,
    RequestsComponent,
    FavoritesComponent,
    FormProductComponent,
    ShowProductComponent,
    NewProductComponent,
    LoginComponent,
    AccountComponent,
    RegisterComponent,
    FinishComponent,
    HomeComponent,
    ConfirmationComponent,
    AboutComponent,
    FiltroComponent,
    FooterComponent,
    MysalesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-full-width',
      preventDuplicates: true,
      progressBar: true,
      closeButton: true
    }),

  ],
  providers: [
    ProductService,
    ShoppingCartService,
    RequestsService,
    FavoritesService,
    UserService,
    AuthService,
    ShoppingCartService,
    SaleService,
    AuthGuard,
    AdminGuard,
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
