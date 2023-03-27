import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string){
    this.htmlElement.nativeElement.style.color = value; 
  }

  @Input() set msg(value: string) {
    this.htmlElement.nativeElement.innerText = value;
  }

  @Input() set valido(value: boolean) {
    if(value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }


  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }


  ngOnInit(): void {
    this.setClassCss();
  }


  setClassCss(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

}
