import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  get nombreNoValido() {
    return (
      this.formulario.get('nombre').invalid &&
      this.formulario.get('nombre').touched
    );
  }

  get apellidoNoValido() {
    return (
      this.formulario.get('apellido').invalid &&
      this.formulario.get('apellido').touched
    );
  }

  get correoNoValido() {
    return (
      this.formulario.get('correo').invalid &&
      this.formulario.get('correo').touched
    );
  }

  get distritoNoValido() {
    return (
      this.formulario.get('direccion.distrito').invalid &&
      this.formulario.get('direccion.distrito').touched
    );
  }

  get ciudadNoValido() {
    return (
      this.formulario.get('direccion.ciudad').invalid &&
      this.formulario.get('direccion.ciudad').touched
    );
  }

  crearFormulario() {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      correo: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      direccion: this.fb.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
    });
  }

  guardar() {
    console.log(this.formulario);

    if (this.formulario.invalid) {

      return Object.values(this.formulario.controls).forEach(control => {

        if ( control instanceof FormGroup ) {

          return Object.values(control.controls).forEach(control => control.markAsTouched() );

        } else {
          control.markAsTouched();
        }

      });
    }
  }
}
