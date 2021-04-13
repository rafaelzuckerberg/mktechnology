import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-create-edit-customer',
  templateUrl: './create-edit-customer.component.html',
  styleUrls: ['./create-edit-customer.component.scss']
})
export class CreateEditCustomerComponent implements OnInit {

  form: FormGroup;
  clicked: boolean = false;

  constructor(private fb: FormBuilder, public modal: MatDialogRef<CreateEditCustomerComponent>, public service: UserService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
    if(this.service.customer.uid) {
      this.form.controls['email'].disable();
      this.form.get('email').clearValidators();
    }
  }

  initForm() {
    this.form = this.fb.group({
      name: [this.service.customer.name, Validators.required],
      cpf: [this.service.customer.cpf, Validators.required],
      email: [this.service.customer.email, Validators.required],
      address: [this.service.customer.address, Validators.required],
      birthday: [this.service.customer.birthday, Validators.required],
    });
  }

  submit() {
    this.clicked = true;
    if(this.service.customer.uid == undefined) {
      this.add();
    } else {
      this.update();
    }
  }


  add() {
    this.service.add(this.form.value)
            .then(res => {
              this.openSnackBar('Cliente cadastrado com sucesso!');
              this.closeModal(true);
            });
  }


  update() {
    this.form.value.uid = this.service.customer.uid;
    this.service.update(this.form.value)
          .then(res => {
            this.openSnackBar('Cliente atualizado com sucesso!');
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
