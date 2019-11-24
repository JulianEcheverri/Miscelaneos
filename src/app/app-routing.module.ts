import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { USUARIOS_ROUTES } from './components/usuario/usuario.route';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'usuario/:id', 
    component: UsuarioComponent,
    // para las rutas hijas dentro del path usuario
    // children:[
    //   // recibe rutas
    //   // {path: 'nuevo', component: UsuarioNuevoComponent},
    //   // {path: 'editar', component: UsuarioEditarComponent},
    //   // {path: 'detalle', component: UsuarioDetalleComponent},
    //   // {path: '**', pathMatch:'full', redirectTo: 'nuevo'}

    //   
    // ]
    // creamos archivo con las mismas rutas
    children: USUARIOS_ROUTES
  },
  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
