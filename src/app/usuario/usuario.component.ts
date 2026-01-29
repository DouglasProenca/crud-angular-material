import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { Usuario } from './usuario'
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  imports: [ ReactiveFormsModule, FlexLayoutModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  camposForm: FormGroup;
  atualizando: boolean = false;

  constructor(private service: UsuarioService){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    })
  }

  salvar(){
    this.camposForm.markAsTouched();

    if(this.camposForm.valid) {
      console.log('valores digitados:', this.camposForm.value)
      console.log('Está valido:', this.camposForm.valid)
      this.service.salvar(this.camposForm.value).subscribe({
        next: usuario => { 
          console.log('Usuário Cadastrado:', usuario)
          this.camposForm.reset();
        },
        error: erro => console.error('deu erro!',erro)
      })
    }
  }

  isCampoInvalido(nomeCampo: string) : boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required']
  }
}
