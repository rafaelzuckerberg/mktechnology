import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SaleService } from 'src/app/shared/services/sale.service';

@Component({
  selector: 'app-details-sale',
  templateUrl: './details-sale.component.html',
  styleUrls: ['./details-sale.component.scss']
})
export class DetailsSaleComponent implements OnInit {

  constructor(public modal: MatDialogRef<DetailsSaleComponent>, public service: SaleService) { }

  ngOnInit(): void {    
    console.log(this.service.sale)
    this.service.sale.total_price = parseFloat(this.service.sale.total_price.substring(3, 15).replace(/\./g,"").replace(",",".")).toLocaleString(
      "pt-BR",
      { style: "currency", currency: "BRL" }
    );
  }


  closeModal(ev) {
    this.modal.close(ev);
  }

}
