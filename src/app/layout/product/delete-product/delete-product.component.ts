import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  clicked: boolean = false;

  constructor(private service: ProductService, public modal: MatDialogRef<DeleteProductComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  delete() {
    this.clicked = true;
    this.service.delete(this.data['uid'])
        .then(res => {
          this.closeModal(true);           
        });
  }


  closeModal(ev) {
    this.modal.close(ev);
  }

}
