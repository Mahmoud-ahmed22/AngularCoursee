import { Component, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ShowProductComponent } from './show-product/show-product.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    
    children: [
      {path: 'update/:id', component: UpdateProductComponent},
      {path: 'create', component: CreateProductComponent},
      {path: 'show/:id', component: ShowProductComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
