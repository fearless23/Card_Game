import { Directive, ElementRef, HostListener } from "@angular/core"

@Directive({
  selector: "[dropdown]"
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) {}
  @HostListener("document:click", ["$event", "$event.target"])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return
    }
    const clickedInside = this.elRef.nativeElement.contains(targetElement)
    if (clickedInside) {
      this.elRef.nativeElement.children[1].classList.add("is-active")
    }
    if (!clickedInside) {
      this.elRef.nativeElement.children[1].classList.remove("is-active")
    }
  }
}
