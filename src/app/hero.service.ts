import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    };

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(hreoes => hreoes.find( hreo => hreo.id == id));
    }
}