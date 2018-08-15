import { HttpService } from './../http.service';
import { Animal } from './../animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals-show',
  templateUrl: './animals-show.component.html',
  styleUrls: ['./animals-show.component.css']
})
export class AnimalsShowComponent implements OnInit {
  animals: Animal[];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // console.log(this.httpService.getAnimals());
    this.animals = this.httpService.getAnimals();

    console.log(1);
  }


}
