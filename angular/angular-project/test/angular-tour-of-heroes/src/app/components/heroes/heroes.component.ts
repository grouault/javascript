import { Component, OnInit } from '@angular/core';
import {Hero} from "../../models/hero.model";
import {HEROES} from "../../mocks/mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public selectedHero: Hero;
  public isSpecial: boolean = false;

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    birthday: new Date(1988, 3, 15)
  };

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  changeSpecial(): void{
    console.log('[changeSpecial] - [debut] - isSpecial = ', this.isSpecial);
    this.isSpecial = !this.isSpecial;
    console.log('[changeSpecial] - [fin] - isSpecial = ', this.isSpecial);
  }

}
