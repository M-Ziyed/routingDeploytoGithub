import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path:'products', component: ProductsComponent},
  { path:'orders', component: MyOrdersComponent},
  { path:'admin/products', component: AdminOrdersComponent},
  { path:'admin/orders', component: AdminProductsComponent},
  { path:'shopping-cart', component: ShoppingCartComponent},
  { path:'login', component: LoginComponent},
  { path:'**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
