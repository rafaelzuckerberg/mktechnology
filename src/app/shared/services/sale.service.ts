import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sale } from '../class/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private salesCollection: AngularFirestoreCollection<Sale>;
  private sales: Observable<Sale[]>;
  private saleDoc: AngularFirestoreDocument<Sale>;
  private _sale: Observable<Sale>;

  sale: Sale;

  constructor(private afs: AngularFirestore) { 
    this.salesCollection = this.afs.collection<Sale>('sales');
  }

  getsales() {
    return this.sales = this.salesCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Sale;
          data.uid = action.payload.doc.id;
          return data;
        });
      }));
  }

  add(sale: Sale) {
    return this.salesCollection.add(sale);
  }

  update(sale: Sale) {
    let uid_sale = sale.uid;
    this.saleDoc = this.afs.doc<Sale>(`sales/${uid_sale}`);
    return this.saleDoc.update(sale);
  }

  delete(id: string) {
    this.saleDoc = this.afs.doc<Sale>(`sales/${id}`);
    return this.saleDoc.delete();
  }

}
