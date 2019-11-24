import { Component, OnInit } from '@angular/core';
// <p [ngStyle]="{'font-size': '20px', 'color': 'blue'}">
// <p [style.fontSize.px] = "50">
@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px] = "tamano">
      Probando ngStyle
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano = 50;
  constructor() { }

  ngOnInit() {
  }

}
