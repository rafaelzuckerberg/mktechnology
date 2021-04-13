import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/shared/class/products';
import { ProductService } from 'src/app/shared/services/product.service';
import { CreateEditProductComponent } from '../create-edit-product/create-edit-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  displayedColumns: string[] = ['uid', 'name', 'price', 'icons'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public service: ProductService, public dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.service.getProducts()
        .subscribe((products) => {
          console.log(products);
          this.dataSource = new MatTableDataSource(products);
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


  openModal(product: Product) {
    this.service.product = Object.assign({}, product);
    const dialogRef = this.dialog.open(CreateEditProductComponent, {
      width: '600px',
      height: '210px'
    });

    dialogRef.afterClosed().subscribe();
  }


  delete(id) {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '400px',
      height: '250px',
      disableClose: true,
      data: {
        uid: id
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res != null) {
        this.openSnackBar('Produto deletado com sucesso!');
      }
    });
  }


  openSnackBar(message: string) {
    this.snackbar.open(message, 'Fechar', {
      duration: 2000,
    });
  }

}
