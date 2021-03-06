import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validadores: ValidadoresService
  ) {
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListener();
  }

  ngOnInit(): void {}

  get pasatiempos() {
    return this.formulario.get('pasatiempos') as FormArray;
  }

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

  get usuarioNoValido() {
    return (
      this.formulario.get('usuario').invalid &&
      this.formulario.get('usuario').touched
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

  get contrasena1NoValido() {
    return (
      this.formulario.get('contrasena1').invalid &&
      this.formulario.get('contrasena1').touched
    );
  }

  get contrasena2NoValido() {
    const contrasena1 = this.formulario.get('contrasena1').value;
    const contrasena2 = this.formulario.get('contrasena2').value;

    return contrasena1 === contrasena2 ? false : true;
  }

  crearFormulario() {
    this.formulario = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        apellido: ['', [Validators.required, this.validadores.noHerrerra]],
        correo: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        usuario: ['', , this.validadores.existeUsuario],
        contrasena1: ['', Validators.required],
        contrasena2: ['', Validators.required],
        direccion: this.fb.group({
          distrito: ['', Validators.required],
          ciudad: ['', Validators.required],
        }),
        pasatiempos: this.fb.array([]),
      },
      {
        validators: this.validadores.contrasenasIguales(
          'contrasena1',
          'contrasena2'
        ),
      }
    );
  }

  crearListener(){
/*     this.formulario.valueChanges.subscribe( valor => {
      console.log(valor)
    })

    this.formulario.statusChanges.subscribe( status => {
      console.log(status)
    }) */

    this.formulario.get('nombre').valueChanges.subscribe(console.log)
  }

  cargarDataAlFormulario() {
    //this.formulario.setValue
    this.formulario.reset({
      nombre: 'Juano',
      apellido: 'Perez',
      correo: 'juan@gmail.com',
      usuario: 'tamueka',
      direccion: {
        distrito: 'Ontario',
        ciudad: 'Okinawa',
      },
    });
  }

  agregarPasatiempo() {
    this.pasatiempos.push(this.fb.control(''));
  }

  borrarPasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }

  guardar() {
    console.log(this.formulario);

    if (this.formulario.invalid) {
      return Object.values(this.formulario.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          return Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }

    //Posteo informacion
    this.formulario.reset({
      nombre: 'Samuel',
    });
  }
}
