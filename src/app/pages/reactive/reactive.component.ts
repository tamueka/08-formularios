import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {

    this.crearFormulario();

   }

  ngOnInit(): void {
  }

  crearFormulario(){

    this.formulario = this.fb.group({
      nombre: ['Samuel'],
      apellido: ['Ruiz'],
      correo: ['tamueka@hotmail.com']
    })

  }

  guardar(){
    console.log(this.formulario)
  }

}
