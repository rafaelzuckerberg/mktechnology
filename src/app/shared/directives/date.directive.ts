import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask';


@Directive({
  selector: '[date]'
})
export class DateDirective {

  constructor(private eleRef: ElementRef) {
    this.applyMask();
  }
  
  applyMask() {
    const nativeEl = this.eleRef.nativeElement;
    $(nativeEl).mask('00/00/0000');
  }

}
