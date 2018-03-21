import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

//Auto-importación
import { LibroDetallesPage } from './libro-detalles';

//Se declaran elementos necesarios para el funcionamiento de libro-detalles.ts
@NgModule({
  declarations: [
    LibroDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(LibroDetallesPage),
  ],
})
export class LibroDetallesPageModule {}
