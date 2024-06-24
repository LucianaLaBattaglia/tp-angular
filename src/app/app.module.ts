import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';

import { FormsModule } from '@angular/forms';
import { BohoAboutComponent } from './boho-about/boho-about.component';
import { BohoClothesComponent } from './boho-clothes/boho-clothes.component';
import { CarComponent } from './car/car.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClothesListComponent,
    BohoAboutComponent,
    BohoClothesComponent,
    CarComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
