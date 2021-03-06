import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAction]'
})
export class ActionDirective {
  @Input('appAction') color: string;
  
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
