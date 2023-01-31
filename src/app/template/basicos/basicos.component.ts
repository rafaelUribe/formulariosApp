import { Component, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10,
  }
  
  nombreValido(): boolean {
    return this.miFormulario?.controls["producto"]?.invalid 
    && this.miFormulario?.controls["producto"]?.touched
  }
  
  precioValido(): boolean {
    return this.miFormulario?.controls["precio"]?.invalid 
    && this.miFormulario?.controls["precio"]?.touched
  }

  guardar(){
    console.log(this.miFormulario.form.value)
    console.log('Posteo correcto')

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }


}
