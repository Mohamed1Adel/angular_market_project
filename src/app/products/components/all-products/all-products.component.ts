import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  products: any[] = [];
  categories: any[] = [];
  loading: boolean = false;

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


}
