import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Sale } from 'src/app/shared/class/sale';
import { SaleService } from 'src/app/shared/services/sale.service';
import { DetailsSaleComponent } from '../details-sale/details-sale.component';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss']
})
export class ListSalesComponent implements OnInit {

  displayedColumns: string[] = ['uid', 'customer', 'created_at', 'total_price', 'icons'];
  dataSource: MatTableDataSource<Sale>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service: SaleService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getSales();
  }


  getSales() {
    this.service.getsales()
        .subscribe(res => {
          res.forEach(item => {            
            item.total_price = parseFloat(item.total_price.replace(/\./g,"").replace(",",".")).toLocaleString(
              "pt-BR",
              { style: "currency", currency: "BRL" }
            )
            console.log(item)
          });
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
  }


  detail(sale: Sale) {
    console.log(sale);
    this.service.sale = Object.assign({}, sale);
    const dialogRef = this.dialog.open(DetailsSaleComponent, {
      width: '600px',
      height: '600px'
    });
    dialogRef.afterClosed().subscribe();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
