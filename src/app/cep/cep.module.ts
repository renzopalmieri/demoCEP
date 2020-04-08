import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscacepComponent } from './buscacep/buscacep.component';
import { ListacepComponent } from './listacep/listacep.component';
import { CEPRoutingModule } from './cep-routing-module';
import { CepComponent } from './cep.component';



@NgModule({
  declarations: [CepComponent,BuscacepComponent, ListacepComponent],
  imports: [
    CommonModule,
    CEPRoutingModule,

  ]
})
export class CepModule { }
