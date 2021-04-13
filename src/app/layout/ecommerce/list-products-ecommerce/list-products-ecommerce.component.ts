import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/class/products';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-list-products-ecommerce',
  templateUrl: './list-products-ecommerce.component.html',
  styleUrls: ['./list-products-ecommerce.component.scss']
})
export class ListProductsEcommerceComponent implements OnInit {

  places: Array<any> = [];
  products: Product[];

  constructor(public service: ProductService) { 
    this.places = [
      {
          imgSrc: 'assets/images/card-1.jpg',
          place: 'Cozy 5 Stars Apartment',
          description:
              // tslint:disable-next-line:max-line-length
              'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
          charge: '$899/night',
          location: 'Barcelona, Spain'
      },
      {
          imgSrc: 'assets/images/card-2.jpg',
          place: 'Office Studio',
          description:
              // tslint:disable-next-line:max-line-length
              'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
          charge: '$1,119/night',
          location: 'London, UK'
      },
      {
          imgSrc: 'assets/images/card-3.jpg',
          place: 'Beautiful Castle',
          description:
              // tslint:disable-next-line:max-line-length
              'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
          charge: '$459/night',
          location: 'Milan, Italy'
      }
    ];
  }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.service.getProducts()
        .subscribe((products) => {
          console.log(products);
          this.products = products;
        });
  }


  addOrder(product: Product) {
    console.log(product);
  }

}
