import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import { HEROES } from  "../mock-heros";

@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']  //private css
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = HEROES;
  constructor() { }

  selectedHero? : Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
