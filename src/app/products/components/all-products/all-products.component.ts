
import { Component } from '@angular/core';
import { product } from 'src/app/carts/Models/product';

import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  products: product[] = [];
  categories: string[] = [];
  loading: boolean = false;
  cartProducts: any[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.getproducts();
    this.getCategories();
  }

  getproducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
        console.log(res);
        this.loading = false;
      },
      (err) => alert(err.status)
    );
  }

  
  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.loading = false;
        this.categories = res;
        console.log(res);
      },
      (error) => {
        alert(error);
      }
    );
  }

  filterCategory(event: any) {
    let value = event.target.value;
    console.log(value);
    // if(value == "All"){
    //   this.getproducts();
    // }else{

    //   this.getProductsCat(value)
    // }
    value == 'All' ? this.getproducts() : this.getProductsCat(value);
  }

  getProductsCat(keyword: string) {
    this.loading = true;
    this.service.getProductsByCat(keyword).subscribe((res: any) => {
      this.products = res;
      this.loading = false;
    });
  }

  addToCart(event: any) {
    // console.log(event)

    // this.cartProducts = localStorage.getItem('cart')
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartProducts.find((item) => item.item.id == event.item.id);
      if (exist) {
        alert('product is already added in your cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }

    // localStorage.setItem('cart', JSON.stringify(event));
  }
}
