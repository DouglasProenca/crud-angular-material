import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor() { }

  pesquisarClientes(nomeBusca: string) : Cliente[] {
    const cliente = this.obterStorage();
    
    if(!nomeBusca){
      return this.obterStorage();
    }
  
    
    return cliente.filter(cliente => cliente.nome?.indexOf(nomeBusca) !== -1);
  }

  salvar(cliente: Cliente) {
    const storage = this.obterStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  buscarClientePorId(id: string) : Cliente | undefined {
    const cliente = this.obterStorage();
    return cliente.find(cliente => cliente.id == id);
  }

  private obterStorage() : Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES)
    if(repositorioClientes) {
      const clientes: Cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }

    const clientes : Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes))
    return clientes;
  }
}
