import { EventEmitter, Injectable, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../class/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsCollection: AngularFirestoreCollection<Product>;
  private products: Observable<Product[]>;
  private productDoc: AngularFirestoreDocument<Product>;
  private _product: Observable<Product>;

  product: Product;
  items: Product[] = [];

  @Output() itemEvent = new EventEmitter();

  constructor(private afs: AngularFirestore) { 
    this.productsCollection = this.afs.collection<Product>('products');
  }

  getProducts() {
    return this.products = this.productsCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Product;
          data.uid = action.payload.doc.id;
          return data;
        });
      }));
  }

  add(product: Product) {
    return this.productsCollection.add(product);
  }

  update(product: Product) {
    let uid_customer = product.uid;
    this.productDoc = this.afs.doc<Product>(`products/${uid_customer}`);
    return this.productDoc.update(product);
  }

  delete(id: string) {
    this.productDoc = this.afs.doc<Product>(`products/${id}`);
    return this.productDoc.delete();
  }
  
}
