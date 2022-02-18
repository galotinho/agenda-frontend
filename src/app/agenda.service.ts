import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url = "http://localhost:8080/agenda";
  
  constructor( private httpClient: HttpClient ) { }

  listarTodos(){
    return this.httpClient.get(this.url);
  }

  adicionar(contato: any){
    return this.httpClient.post(this.url, contato);
  }

  excluir(id: number){
    return this.httpClient.delete(this.url+"/"+id);
  }

  atualizar(contato: any){
    return this.httpClient.put(this.url+'/'+contato.id, contato);
  }

  buscar(id: number){
    return this.httpClient.get(this.url+'/'+id);
  }

}
