import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../models/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private http: HttpClient
  ) { }

  buscar(cep: string){
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`).toPromise().then(response =>  {
      this.cepResponse(response);
    });
  }

  private cepResponse(cepResponse): Cep{
    let cep = new Cep();
    cep.cep = cepResponse.cep;
    cep.logradouro = cepResponse.logradouro;
    cep.bairro = cepResponse.bairro;
    cep.cidade = cepResponse.localidade;
    cep.estado = cepResponse.uf;
    return cep;
  }

}
