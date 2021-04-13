import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/shared/class/customer';
import { UserService } from 'src/app/shared/services/user.service';
import { CreateEditCustomerComponent } from '../create-edit-customer/create-edit-customer.component';
import { DeleteCustomerComponent } from '../delete-customer/delete-customer.component';


@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  displayedColumns: string[] = ['uid', 'name', 'email', 'cpf', 'birthday', 'icons'];
  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service: UserService, public dialog: MatDialog, private snackbar: MatSnackBar) {    
  }

  ngOnInit() {    
    this.getCustomers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getCustomers() {
    this.service.getCustomer()
        .subscribe((customers) => {
          console.log(customers);
          this.dataSource = new MatTableDataSource(customers);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }


  openModal(user: Customer) {
    this.service.customer = Object.assign({}, user);
    const dialogRef = this.dialog.open(CreateEditCustomerComponent, {
      width: '600px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe();
  }


  delete(id) {
    const dialogRef = this.dialog.open(DeleteCustomerComponent, {
      width: '400px',
      height: '250px',
      disableClose: true,
      data: {
        uid: id
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res != null) {
        this.openSnackBar('Cliente deletado com sucesso!');
      }
    });
  }


  openSnackBar(message: string) {
    this.snackbar.open(message, 'Fechar', {
      duration: 2000,
    });
  }

}

