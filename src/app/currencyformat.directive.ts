import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrencyformat]',
  standalone: true
})
export class CurrencyformatDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event']) onKeyDown(input: InputEvent) {
    const inputElement = input.target as HTMLInputElement
    this.updateUI(inputElement.value)
  }
  
  updateUI(value: any) {
    if (Number.isNaN(value)|| value === '') {
      this.element.nativeElement.value = ''
      return

    }
    this.element.nativeElement.value = new Intl.NumberFormat('en-IN').format(parseInt(value.replace(/,/g,'')))
  }
}
