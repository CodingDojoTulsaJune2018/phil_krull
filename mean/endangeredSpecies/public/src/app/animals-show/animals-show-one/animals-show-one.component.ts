import { Animal } from './../../animal';
import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-animals-show-one',
  templateUrl: './animals-show-one.component.html',
  styleUrls: ['./animals-show-one.component.css']
})
export class AnimalsShowOneComponent implements OnInit {

  showAnimal: Animal;
  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log(params);
      this.httpService.showAnimal(params.id).subscribe(animal => {
        this.showAnimal = animal as Animal;
        console.log('showAnimal', this.showAnimal);
      });
    });
  }

  deleteAnimal(id: String) {
    this.httpService.deleteTheAnimal(id);
    this.showAnimal = undefined;
  }

}
