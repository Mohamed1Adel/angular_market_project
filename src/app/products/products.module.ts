import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [AllProductsComponent, AllDetailsComponent],
    imports: [BrowserModule, CommonModule, SharedModule]
})
export class ProductsModule {}
