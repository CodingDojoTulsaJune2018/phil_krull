import { Animal } from './animal';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: String = 'Endangered Species';
  animals: Animal[];
  showAnimal: Animal;
  createAnimal: Animal = new Animal();

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getAnimals().subscribe(animals => this.animals = animals as Animal[]);
  }

  getAnimal(animal_id: number): void {
    console.log(animal_id);
    this.httpService.showAnimal(animal_id).subscribe(animal => this.showAnimal = animal as Animal);
  }

  clear(): void {
    this.showAnimal = undefined;
  }

  addAnimal() {
    this.httpService.addAnimal(this.createAnimal).subscribe(animal => this.animals.push(animal as Animal));
  }
}
