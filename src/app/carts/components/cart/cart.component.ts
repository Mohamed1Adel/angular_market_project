import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: any[] = [];
  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.getproducts();
  }

  getproducts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res;
      // console.log(res);
    });
  }
}
