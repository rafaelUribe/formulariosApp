import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]]
  })

  constructor(
    private fb: FormBuilder
  ) {}

  guardar(){

  }

  campoEsValido(control: string){
    return this.miFormulario.controls[control].errors 
    && 
    this.miFormulario.controls[control].touched
  }

}
