import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/shared/class/order';
import { OrderService } from 'src/app/shared/services/order.service';
import { DeleteOrderComponent } from '../delete-order/delete-order.component';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss']
})
export class ListOrdersComponent implements OnInit {

  displayedColumns: string[] = ['uid', 'created_at', 'uid_customer', 'price', 'icons'];
  dataSource: MatTableDataSource<Order>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public service: OrderService, public dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getOrders();
  }


  getOrders() {
    this.service.getorders()
        .subscribe((orders) => {
          console.log(orders);
          this.dataSource = new MatTableDataSource(orders);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  delete(id) {
    const dialogRef = this.dialog.open(DeleteOrderComponent, {
      width: '400px',
      height: '250px',
      disableClose: true,
      data: {
        uid: id
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res != null) {
        this.openSnackBar('Pedido deletado com sucesso!');
      }
    });
  }


  openSnackBar(message: string) {
    this.snackbar.open(message, 'Fechar', {
      duration: 2000,
    });
  }


}
