import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})

export class DemoDirective implements OnInit {
  @Input() imageHeight: string;
	@Input() imageWidth: string;

  constructor(
  	private elementRef: ElementRef
	) {}

	ngOnInit() {
  	this.elementRef.nativeElement.style.height = `${this.imageHeight}px`;
  	this.elementRef.nativeElement.style.width = `${this.imageWidth}px`;
	}
}
