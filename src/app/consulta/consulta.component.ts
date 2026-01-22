import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-consulta',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  listaClientes: Cliente[] = [];

  constructor(private service: ClienteService) {

  }

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }
}
