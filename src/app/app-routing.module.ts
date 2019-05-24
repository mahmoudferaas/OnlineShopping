import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProuductsComponent } from './components/prouducts/prouducts.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin/admin-orders/admin-orders.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = 
[
  { path : 'products' , component : ProuductsComponent},
  { path : 'orders' , component : MyOrdersComponent},
  { path : 'admin/products' , component : AdminProductsComponent},
  { path : 'admin/orders' , component : AdminOrdersComponent},
  { path : 'shopping-cart' , component : ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
