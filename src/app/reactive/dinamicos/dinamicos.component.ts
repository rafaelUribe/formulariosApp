import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Metal Gear'],
      ['Death Stranding']
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid) {
      return
    }

    // these two lines do the same
    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required) );
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ) );

    this.nuevoFavorito.reset()

  }

  borrar(i: number){
    console.log(this.favoritosArr.value[i])
    this.favoritosArr.removeAt(i)

  }

  constructor(
    private fb: FormBuilder
  ) {}

  guardar(){

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return
    }

    console.log(this.miFormulario.value)
  }

  campoEsValido(control: string){
    return this.miFormulario.controls[control].errors 
    && 
    this.miFormulario.controls[control].touched
  }

}
