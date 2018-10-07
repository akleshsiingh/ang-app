import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input("appInputFormat") format;
  constructor(private el:ElementRef) { }
  @HostListener('focus') onFocus (){
    console.log("on focus");
  }
  
  @HostListener('blur') onBlur (){
    let v:string = this.el.nativeElement.value;
    if(this.format=='uppercase')
        this.el.nativeElement.value = v.toUpperCase();
  else this.el.nativeElement.value = v.toLowerCase();
  }
  

}
