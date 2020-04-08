import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep:any = {}

  constructor() { }

  ngOnInit(): void {
  }



  onCEP(event) {
    console.log('enter');
    this.cep = event;
    console.log(this.cep);
  }

}
