import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  formulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })


  constructor(private fb: FormBuilder) { }


  tieneError(campo: string): boolean  {
    return this.formulario.get(campo)?.invalid || false;
  }

}

