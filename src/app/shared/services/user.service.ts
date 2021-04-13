import { Injectable } from '@angular/core';
import { Customer } from '../class/customer';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private customersCollection: AngularFirestoreCollection<Customer>;
  private customers: Observable<Customer[]>;
  private customerDoc: AngularFirestoreDocument<Customer>;
  private _customer: Observable<Customer>;

  customer: Customer;

  constructor(private afs: AngularFirestore) {
  }


  getCustomer() {
    this.customersCollection = this.afs.collection<Customer>('customers');
    return this.customers = this.customersCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Customer;
          data.uid = action.payload.doc.id;
          return data;
        });
      }));
  }

  add(customer: Customer) {
    return this.customersCollection.add(customer);
  }

  update(customer: Customer) {
    let uid_customer = customer.uid;
    this.customerDoc = this.afs.doc<Customer>(`customers/${uid_customer}`);
    return this.customerDoc.update(customer);
  }

  delete(id: string) {
    this.customerDoc = this.afs.doc<Customer>(`customers/${id}`);
    return this.customerDoc.delete();
  }

}
