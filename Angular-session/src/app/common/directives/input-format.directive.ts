import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
  standalone: true,
})
export class InputFormatDirective {
  @Input() appInputFormat!:('uppercase' | 'lowercase');
  constructor(private eleRef:ElementRef) {
    // console.log('inside inputFormatDirective');
  }
  // @HostListener('keyup') onKeyup() {
  //   const element=this.eleRef.nativeElement as HTMLInputElement;
  //   let formattedVal=element.value;
  //   if(this.appInputFormat=='uppercase'){
  //     formattedVal=formattedVal.toUpperCase();
  //   }else if(this.appInputFormat=='lowercase'){
  //     formattedVal=formattedVal.toLowerCase();
  //   }
  //   // console.log(formattedVal);
  //   element.value=formattedVal;

  // }
  @HostListener('blur') onBlur() {
    const element=this.eleRef.nativeElement as HTMLInputElement;
    let formattedVal=element.value;
    if(this.appInputFormat=='uppercase'){
      formattedVal=formattedVal.toUpperCase();
    }else if(this.appInputFormat=='lowercase'){
      formattedVal=formattedVal.toLowerCase();
    }
    // console.log(formattedVal);
    element.value=formattedVal;

  }
}
