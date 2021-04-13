import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask';


@Directive({
  selector: '[cep]'
})
export class CepDirective {

  constructor(private eleRef: ElementRef) {
    this.applyMask();
  }
  
  applyMask() {
    const nativeEl = this.eleRef.nativeElement;
    $(nativeEl).mask('00000-000');
  }
 

}
