import {
  Directive,
  Input,
  ElementRef,
  HostListener,
  Renderer2,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { LowerCasePipe, UpperCasePipe, TitleCasePipe } from '@angular/common';
import { IJSON } from 'src/app/interfaces/JSON.interface';

@Directive({
  selector: '[appNameValidation]',
  standalone: true,
  providers: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
})
export class NameValidationDirective implements OnInit {
  @Input() textCase!: 'uppercase' | 'titlecase';
  @Output() submitField = new EventEmitter();
  currentElement!: HTMLInputElement;
  parentNode!: HTMLElement;
  appendedElement!: HTMLDivElement;
  inputVal = '';

  constructor(
    private ele: ElementRef,
    private renderer: Renderer2,
    private lowerCase: LowerCasePipe,
    private upperCase: UpperCasePipe,
    private titleCase: TitleCasePipe
  ) {}
  ngOnInit() {
    this.currentElement = this.ele.nativeElement;
    this.parentNode = this.renderer.parentNode(this.currentElement);
    this.appendedElement = this.renderer.createElement('div');
  }
  @HostListener('keyup', ['$event']) onKeyup(event: KeyboardEvent) {
    const styles: IJSON = {
      position: 'absolute',
      width: '100%',
      padding: '5px 10px',
      'min-height': '35px',
      'z-index': 99,
      bottom: '-35px',
    };
    this.inputVal = this.currentElement.value.trim();
    if (this.textCase === 'uppercase') {
      this.inputVal = this.upperCase.transform(this.inputVal);
    } else if (this.textCase === 'titlecase') {
      this.inputVal = this.titleCase.transform(this.inputVal);
    } else {
      this.inputVal = this.lowerCase.transform(this.inputVal);
    }
    if (event.code === 'Enter' && this.inputVal !== '') {
      this.returnUpdatedValue();
    }
    this.renderer.setProperty(this.appendedElement, 'innerHTML', this.inputVal);
    for (const key in styles) {
      if (styles.hasOwnProperty(key)) {
        this.renderer.setStyle(this.appendedElement, key, styles[key]);
      }
    }
    this.renderer.setStyle(this.parentNode, 'position', 'relative');
    const textLength = this.inputVal.length;
    let backgroundColor = '';
    switch (true) {
      case textLength === 0:
        backgroundColor = '#e8e4e4';
        break;
      case textLength < 3:
        backgroundColor = 'red';
        break;
      case textLength <= 4:
        backgroundColor = 'blue';
        break;
      case textLength <= 20:
        backgroundColor = 'green';
        break;
      case textLength > 20:
        backgroundColor = 'yellow';
        break;
    }
    this.renderer.setStyle(
      this.appendedElement,
      'background-color',
      backgroundColor
    );
    this.renderer.appendChild(this.parentNode, this.appendedElement);
  }
  @HostListener('blur') onBlur() {
    this.updateAndRemove();
  }
  updateAndRemove() {
    this.renderer.setProperty(this.currentElement, 'value', this.inputVal);
    try{
      this.renderer.removeChild(this.parentNode, this.appendedElement);
    }catch{}
  }
  returnUpdatedValue() {
    const returnVal: InputSubmitField = {
      value: this.inputVal,
    };
    this.inputVal = '';
    setTimeout(() => {
      this.updateAndRemove();
    });
    this.submitField.emit(returnVal);
  }
}

export interface InputSubmitField {
  value: string;
}
