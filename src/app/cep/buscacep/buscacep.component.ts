import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CepService } from 'src/app/cep.service';

@Component({
  selector: 'app-buscacep',
  templateUrl: './buscacep.component.html',
  styleUrls: ['./buscacep.component.css']
})
export class BuscacepComponent implements OnInit {

  @Output() micep: EventEmitter<any>;
  cepfind: any = {};


  constructor(private service : CepService) {

    this.micep = new EventEmitter();
   }

  ngOnInit(): void {
  }



  buscar(nombre: any) {
    console.log(nombre.value);

    this.service.getCep(nombre.value).subscribe( (data: any) =>{
      console.log(data);
      this.cepfind =  data;
      console.log(this.cepfind);
      this.micep.emit(this.cepfind);
    });




    //this.router.navigate(['/buscar', nombre]);
  }

}
