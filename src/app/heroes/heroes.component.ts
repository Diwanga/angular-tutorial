import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
// import { HEROES } from  "../mock-heros";
import { HeroService } from '../hero.service';
import { MessageService} from "../message.service";

@Component({
  selector: 'app-heroes', // the component's CSS element selector
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']  //private css
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService: HeroService,private messageService : MessageService) {}

  selectedHero? : Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }


  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void { //like useeffect
    this.getHeroes();
  }

}
