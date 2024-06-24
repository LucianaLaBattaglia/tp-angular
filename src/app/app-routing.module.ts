import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BohoAboutComponent } from './boho-about/boho-about.component';
import { BohoClothesComponent } from './boho-clothes/boho-clothes.component';

const routes: Routes = [

  {path:'', redirectTo:'clothes', pathMatch:'full'},
  {path:'clothes', component:BohoClothesComponent},
  {path:'about', component:BohoAboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
