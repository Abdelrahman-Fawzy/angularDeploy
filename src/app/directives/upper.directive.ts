import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private ref: ElementRef) { }
  @HostListener('focus') onFocus() {
    console.log('focus');
  }

  @HostListener('blur') onBlur() {
    const getValue: string = this.ref.nativeElement.value;
    this.ref.nativeElement.value = getValue.toUpperCase();
  }
}
