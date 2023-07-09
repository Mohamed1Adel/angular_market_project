import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartComponent],
  imports: [FormsModule, CommonModule, BrowserModule, RouterModule,SharedModule],
  exports: [RouterModule, FormsModule],
})
export class CartsModule {}
