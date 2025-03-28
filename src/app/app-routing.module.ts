import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { guardGuard } from './guard.guard';

const routes: Routes = [
 {path: '', redirectTo: 'home', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'about', component: AboutComponent},
 {path: 'products', loadChildren:(()=>
  import('./featuredModules/products/products.module').then((m)=>m.ProductsModule)
)},
 {path: 'contact', component: ContactComponent},
 {path: 'recipe/:id', component: RecipeDetailsComponent, canActivate:[guardGuard]},
 {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
