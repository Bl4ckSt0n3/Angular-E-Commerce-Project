import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardPageComponent } from './pages/admin-dashboard-page/admin-dashboard-page.component';
import { BasketPageComponent } from './pages/basket-page/basket-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { ProductDetailPageComponent } from './pages/products-page/product-detail-page/product-detail-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: "",  component: HomePageComponent},
  { path: "home", component: HomePageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "products", component: ProductsPageComponent },
  { path: "about", component: InfoPageComponent },
  { path: "user/register", component: RegisterPageComponent }, // , canActivate: [AuthGuardService]
  { path: "profile", component: ProfilePageComponent },
  { path: "payment", component: PaymentPageComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "basket", component: BasketPageComponent },
  { path: "products/:param", component: ProductDetailPageComponent},
  { path: "dashboard", component: AdminDashboardPageComponent },
  { path: "orders", component: OrdersPageComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
