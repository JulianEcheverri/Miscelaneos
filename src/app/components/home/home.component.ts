import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style> 
  <app-css></app-css>
  <app-clases></app-clases>
  <p [appResaltado]="">
    Probando directivas personalizada
  </p>
  <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent 
  implements 
    OnInit, 
    OnChanges, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewInit,
    AfterViewChecked, 
    OnDestroy {
            
  constructor() { 
    console.log('constructor');
  }

    ngOnInit() {
      console.log('ngOnInit');
    }
    ngOnChanges(){
      console.log('ngOnChanges');

    } 
    ngDoCheck(){
      // cuando hace el cambio
      console.log('ngDoCheck');

    } 
    ngAfterContentInit(){
      console.log('ngAfterContentInit');

    } 
    ngAfterContentChecked(){
      // revisa contenido despues del cambio

      console.log('ngAfterContentChecked');

    }
    ngAfterViewInit(){
      // cuando ya esta aplicado el cambio
      console.log('ngAfterViewInit');

    }
    ngAfterViewChecked(){
      console.log('ngAfterViewChecked');

    }
    ngOnDestroy() {
      console.log('ngOnDestroy');
    }

}
