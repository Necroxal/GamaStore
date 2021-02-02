import { Directive, ElementRef } from '@angular/core'; //va a modificar el DOm

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'blue';
   }

}
