import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required ]]
  })

  constructor(
    private fb: FormBuilder
  ) {}

}
