import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    // para obtener el parametro de la ruta padre en la hija
    this.route.parent.params.subscribe(x => {
      console.log('ruta hija usuario nuevo');
      console.log(x);
    })
  }


  ngOnInit() {
  }

}
