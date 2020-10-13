import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHover]'
})
export class HoverDirective{

  @HostBinding('style.transform') transform = null
  // @HostBinding('style.backgroundColor') backColor = null

  constructor(private el: ElementRef,
              private rend: Renderer2) { }

  @HostListener('mouseenter') onEnter(){
    this.transform = 'scale(1.075)'
    // this.rend.setStyle(this.el.nativeElement, 'backgroundColor', 'rgba(255, 255, 255, 0.97)!')
    this.rend.addClass(this.el.nativeElement, 'hovered-in')
  }

  @HostListener('mouseleave') onLeave(){
    this.transform = 'scale(1)'
    this.rend.removeClass(this.el.nativeElement, 'hovered-in')
    // this.rend.setStyle(this.el.nativeElement, 'backgroundColor', 'rgba(255, 255, 255, 0.97)')
  }
}
