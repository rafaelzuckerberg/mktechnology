import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.scss']
})
export class DeleteCustomerComponent implements OnInit {

  clicked: boolean = false;

  constructor(private service: UserService, public modal: MatDialogRef<DeleteCustomerComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

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
