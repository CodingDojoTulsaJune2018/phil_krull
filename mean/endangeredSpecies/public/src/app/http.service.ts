import { Animal } from './animal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  animals: Animal[];

  constructor(private _http: HttpClient) {
    this._http.get('/animals').subscribe(animals => {
      this.animals = animals as Animal[];
    });
  }

  getAnimals() {
      console.log(3);
      console.log(2);
      return this.animals;
  }

  showAnimal(animal_id: number) {
    return this._http.get(`/animals/${animal_id}`);
  }

  addAnimal(animal: Animal) {
    return this._http.post('/animals', animal);
  }

  storeAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  deleteTheAnimal(id: String) {
    this._http.delete(`/animals/${id}`).subscribe(animal => {
      console.log('before loop', this.animals.length);
      for (let i = 0; i < this.animals.length; i++) {
        console.log(this.animals[i]);
        console.log(typeof(animal));
        if (this.animals[i]['_id'] === id) {
          console.log('in splice');
          this.animals.splice(i, 1);
        }
      }
      console.log('after loop', this.animals.length);
    });
  }

}
