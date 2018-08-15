import { HttpService } from './../http.service';
import { Animal } from './../animal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animals-new',
  templateUrl: './animals-new.component.html',
  styleUrls: ['./animals-new.component.css']
})
export class AnimalsNewComponent implements OnInit {
  createAnimal: Animal = new Animal();

  constructor(
    private httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  addAnimal(): void {
    this.httpService.addAnimal(this.createAnimal).subscribe(animal => {
      this.httpService.storeAnimal(animal as Animal);
      // this.createAnimal = new Animal();
      this._router.navigate(['/show']);
    });
  }

}
