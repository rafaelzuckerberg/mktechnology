import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/shared/class/order';
import { Product } from 'src/app/shared/class/products';
import { Sale } from 'src/app/shared/class/sale';
import { OrderService } from 'src/app/shared/services/order.service';
import { SaleService } from 'src/app/shared/services/sale.service';
import { DeleteItemOrderComponent } from './delete-item-order/delete-item-order.component';

@Component({
  selector: 'app-kart-orders',
  templateUrl: './kart-orders.component.html',
  styleUrls: ['./kart-orders.component.scss']
})
export class KartOrdersComponent implements OnInit {

  items: Product[] = [];
  total_price: string;
  sale: Sale = {};

  constructor(private service: SaleService, public dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('items'));
    this.sumItems();
    this.items.forEach(item => {
      item.price = parseFloat(item.price.replace(/\./g,"").replace(",",".")).toLocaleString(
        "pt-BR",
        { style: "currency", currency: "BRL" }
      )
    });    
  }


  delete(item: Product) {
    const dialogRef = this.dialog.open(DeleteItemOrderComponent, {
      width: '400px',
      height: '250px',
      disableClose: true,
      data: {
        uid: item.uid,
        name: item.name
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res != null) {
        this.items = JSON.parse(localStorage.getItem('items'));
        console.log(this.items)
        this.openSnackBar('Ítem removido com sucesso!');
      }
    });
  }


  removeAll(item) {
    const dialogRef = this.dialog.open(DeleteItemOrderComponent, {
      width: '400px',
      height: '250px',
      disableClose: true,
      data: {
        uid: null
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(!res && res != null) {
        this.items = null;
        localStorage.removeItem('items');
        this.openSnackBar('Todos os ítens foram removidos com sucesso!');
      }
    });
  }


  sumItems() {
    const soma = this.items.reduce((acumulador, valorAtual) => {
      return acumulador + parseFloat(valorAtual.price.replace(/\./g,"").replace(",","."))
    }, 0);
    this.total_price = soma.toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
  }


  doneSale() {
    this.sale.total_price = this.total_price.replace('R$', '').substring(1, 15);
    this.sale.created_at = new Date();
    this.sale.customer = `${localStorage.getItem('uid')} Rafael`;
    this.sale.items = this.items;
    this.service.add(this.sale)
        .then(res => {
          if(res) {
            this.items = null;
            localStorage.removeItem('items');
            this.openSnackBar('Venda realizada com sucesso!');
          }
        })
  }


  openSnackBar(message: string) {
    this.snackbar.open(message, 'Fechar', {
      duration: 2000,
    });
  }

}
