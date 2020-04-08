import { Component, OnInit, Input } from '@angular/core';
import { CepService } from 'src/app/cep.service';

@Component({
  selector: 'app-listacep',
  templateUrl: './listacep.component.html',
  styleUrls: ['./listacep.component.css']
})
export class ListacepComponent implements OnInit {

  @Input() cepfind: any = {};

  constructor( private service: CepService) {
    console.log("work");

  }

  ngOnInit(): void {

  }


}
