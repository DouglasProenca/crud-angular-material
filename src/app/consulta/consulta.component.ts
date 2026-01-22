import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cadastro/cliente';
import { MatButtonModule } from "@angular/material/button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    CommonModule
],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {
  
  nomeBusca: string = ``;
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ["id","nome","cpf","dataNascimento","email","acoes"];

  constructor(private service: ClienteService, private route: Router) {

  }

  preparaEditar(id: string){
    this.route.navigate(['/cadastro'],{queryParams: {"id": id}});
  }

  pesquisar(){
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca);
  }

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }
}
