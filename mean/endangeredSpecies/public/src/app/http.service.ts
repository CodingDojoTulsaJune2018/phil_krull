import { Animal } from './animal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  getAnimals() {
    return this._http.get('/animals');
  }

  showAnimal(animal_id: number) {
    return this._http.get(`/animals/${animal_id}`);
  }

  addAnimal(animal: Animal) {
    return this._http.post('/animals', animal);
  }

}
