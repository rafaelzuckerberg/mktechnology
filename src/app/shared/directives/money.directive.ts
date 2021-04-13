import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask';

@Directive({
  selector: '[money]'
})
export class MoneyDirective {

  constructor(private eleRef: ElementRef) {
    this.applyMask();
  }
  
  applyMask() {
    const nativeEl = this.eleRef.nativeElement;
    $(nativeEl).mask('000.000.000.000.000,00', {reverse: true});
  }

}
