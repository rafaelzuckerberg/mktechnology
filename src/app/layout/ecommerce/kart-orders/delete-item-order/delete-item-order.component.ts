import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/class/products';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-delete-item-order',
  templateUrl: './delete-item-order.component.html',
  styleUrls: ['./delete-item-order.component.scss']
})
export class DeleteItemOrderComponent implements OnInit {

  clicked: boolean = false;
  item: Product = {};

  constructor(public modal: MatDialogRef<DeleteItemOrderComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: ProductService) { }

  ngOnInit(): void {
    this.item = this.data;
  }

  delete() {
    this.clicked = true;
    if(this.item['uid'] == null) {
      this.closeModal(false);
    } else {
      let array = JSON.parse(localStorage.getItem('items'));
  
      array.forEach((item, index) => {       
        if(item['uid'] == this.item['uid']) {
              array.splice(index, 1)          
        }
      });
      console.log(array)
      localStorage.setItem('items', JSON.stringify(array));
      this.closeModal(true);
    }
  }


  closeModal(ev) {
    this.modal.close(ev);
  }

}
