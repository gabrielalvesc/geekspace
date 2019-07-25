import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './security/auth.guard';
import { FinishComponent } from './components/finish/finish.component';




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
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
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
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
