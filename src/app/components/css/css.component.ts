import { Component, OnInit } from '@angular/core';
// // aplica un scope solo para ese componetne con un estilo determinado
@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [
    `
    p{
      color: red;
      font-size: 20px
      
    }
    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
