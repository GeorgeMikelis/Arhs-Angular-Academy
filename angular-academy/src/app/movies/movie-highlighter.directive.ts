import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMovieHighlighter]'
})
export class MovieHighlighterDirective {

  constructor(private elRef: ElementRef) {}

  @HostListener('mouseenter')
  highlight() {
    this.elRef.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave')
  removeHighlight() {
    this.elRef.nativeElement.style.color = 'black';
  }
}
