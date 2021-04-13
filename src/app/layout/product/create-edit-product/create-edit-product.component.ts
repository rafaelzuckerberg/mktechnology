import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.scss']
})
export class CreateEditProductComponent implements OnInit {

  form: FormGroup;
  clicked: boolean = false;

  constructor(public service: ProductService, private fb: FormBuilder, public modal: MatDialogRef<CreateEditProductComponent>, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.service.product.name, Validators.required],
      price: [this.service.product.price, Validators.required],
    });
  }

  submit() {
    this.clicked = true;
    if(this.service.product.uid == undefined) {
      this.add();
    } else {
      this.update();
    }
  }


  add() {
    this.service.add(this.form.value)
            .then(res => {
              this.openSnackBar('Produto cadastrado com sucesso!');
              this.closeModal(true);
            });
  }


  update() {
    this.form.value.uid = this.service.product.uid;
    this.service.update(this.form.value)
          .then(res => {
            this.openSnackBar('Produto atualizado com sucesso!');
            this.closeModal(true);
          });
  }


  openSnackBar(message: string) {
    this.snackbar.open(message, 'Fechar', {
      duration: 2000,
    });
  }


  closeModal(ev) {
    this.modal.close(ev);
  }

}
