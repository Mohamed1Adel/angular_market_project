import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { product } from '../../Models/product';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: product[] = [];
  cartProducts: any[] = [];
  total: any = 0;
  success:boolean=false;
  constructor(private service: CartsService,) {}

  ngOnInit() {
    // this.getproducts();
    this.getCartProducts();
  }

  // getproducts() {
  //   this.service.getAllProducts().subscribe((res: any) => {
  //     this.products = res;
  //     // console.log(res);
  //   });
  // }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
    console.log(this.cartProducts);
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total +=
        this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  minsAmount(i: any) {
    this.cartProducts[i].quantity--;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  plusAmount(i: any) {
    this.cartProducts[i].quantity++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  deleteAll() {
    this.cartProducts = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  deleteProduct(i: any) {
    this.cartProducts.splice(i, 1);
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }


  addCart(){
    let products=this.cartProducts.map(item=>{
      return {productId:item.item.id,quantity:item.quantity}
    })
    let Model = {
      userID: 5,
      date: new Date(),
      products: products,
    };
    console.log(Model);
    this.service.createNewCart(Model).subscribe(res=>{
      this.success=true
    })

  }
}
