import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.height(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.height(null);
  }

  private height(color: string | null): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
