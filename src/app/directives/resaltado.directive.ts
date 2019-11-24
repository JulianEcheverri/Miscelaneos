import { Directive, ElementRef, HostListener, Input} from '@angular/core';
// para trabajar con elementos de html donde esta la directiva usamos ElementRef
// para escuchar elñ comportamiento del elemento de la directiva usamos HostListener
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  // input que recibe el color para cambiarlo
@Input('appResaltado') nuevoColor: string

  constructor(private element: ElementRef) { 
    // element.nativeElement.style.backgroundColor = "yellow";
  // console.log("llamada");
  }

  @HostListener('mouseenter') mouseOver(){
    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave') mouseLeave(){
    this.resaltar(null);
  }

  private resaltar(color = 'yellow'){
    this.element.nativeElement.style.backgroundColor = color;
  }

}
