import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input() appHighlight = '';

    constructor(private el: ElementRef) {
        // this.el.nativeElement.style.backgroundColor = 'yellow';
    }

    ngAfterViewInit() {
        this.el.nativeElement.style.backgroundColor = this.appHighlight;
    }
}