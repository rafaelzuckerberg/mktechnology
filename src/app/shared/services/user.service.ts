import { EventEmitter, Injectable, Output } from '@angular/core';
import { Customer } from '../class/customer';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<Customer>;
  private users: Observable<Customer[]>;
  private userDoc: AngularFirestoreDocument<Customer>;
  private user: Observable<Customer>;

  @Output() userLogged = new EventEmitter();

  customer: Customer;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.usersCollection = this.afs.collection<Customer>('users');
  }


  authenticated() {
    return this.auth.auth.currentUser;
  }

  // Begin user methods
  register(user: User) {
    let promise = new Promise((resolve, reject) => {
      this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
              this.userLogged.emit(res);
              resolve(res);
            }, e => {
              reject(e)
            })
    });
    return promise;
  }


  login(user: Customer) {
    return this.auth.auth.signInWithEmailAndPassword(user.email, user.password);
  }


  logout() {
    return this.auth.auth.signOut();
  }


  getCustomers() {
    this.usersCollection = this.afs.collection<Customer>('users');
    return this.users = this.usersCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Customer;
          data.uid = action.payload.doc.id;
          return data;
        });
      }));
  }


  getUser(user_id: string) {
    this.userDoc = this.afs.doc<Customer>(`users/${user_id}`);
    return this.user = this.userDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Customer;
        data.uid = action.payload.id;
        return data;
      }
    }));
  }


  add(user: Customer) {
    return this.usersCollection.add(user);
    // return this.afs.collection<Customer>(`users`).doc(user.uid).set(user)
  }


  update(user: Customer) {
    let uid_customer = user.uid;
    this.userDoc = this.afs.doc<Customer>(`users/${uid_customer}`);
    return this.userDoc.update(user);
  }


  delete(id: string) {
    this.userDoc = this.afs.doc<Customer>(`users/${id}`);
    return this.userDoc.delete();
  }

}

