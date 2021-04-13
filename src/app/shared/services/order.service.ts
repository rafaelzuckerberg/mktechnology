import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from '../class/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersCollection: AngularFirestoreCollection<Order>;
  private orders: Observable<Order[]>;
  private orderDoc: AngularFirestoreDocument<Order>;
  private _order: Observable<Order>;

  order: Order;

  constructor(private afs: AngularFirestore) { 
    this.ordersCollection = this.afs.collection<Order>('orders');
  }

  getorders() {
    return this.orders = this.ordersCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Order;
          data.uid = action.payload.doc.id;
          return data;
        });
      }));
  }

  add(order: Order) {
    return this.ordersCollection.add(order);
  }

  update(order: Order) {
    let uid_order = order.uid;
    this.orderDoc = this.afs.doc<Order>(`orders/${uid_order}`);
    return this.orderDoc.update(order);
  }

  delete(id: string) {
    this.orderDoc = this.afs.doc<Order>(`orders/${id}`);
    return this.orderDoc.delete();
  }

}
