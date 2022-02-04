import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CreditCardDirective } from './pages/payment-page/credit-card.directive';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { ProductDetailPageComponent } from './pages/products-page/product-detail-page/product-detail-page.component';
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { DeleteAccountModalComponent } from './pages/profile-page/delete-account-modal/delete-account-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    ProductsPageComponent,
    InfoPageComponent,
    ProfilePageComponent,
    RegisterPageComponent,
    PaymentPageComponent,
    ContactPageComponent,
    CreditCardDirective,
    BasketPageComponent,
    ProductDetailPageComponent,
    AdminDashboardPageComponent,
    OrdersPageComponent,
    DeleteAccountModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      enableHtml: true,
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      closeButton: true
    }),
    FlexLayoutModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
