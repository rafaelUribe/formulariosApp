import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)] ],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  })

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600,
    })
  }

  campoEsValido(control: string): boolean | null {
    return this.miFormulario.controls[control].errors 
            && 
            this.miFormulario.controls[control].touched
  }

  guardar(){

    if(this.miFormulario.invalid) {
      console.log('invalid')
      this.miFormulario.markAllAsTouched()
      return
    }

    console.log(this.miFormulario.value)
    this.miFormulario.reset();
  }
}
