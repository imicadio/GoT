import {Injectable} from '@angular/core'
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { SharedHero} from '../shared/hero.service' 

@Injectable()
export class HeroRouteActivator implements CanActivate {
    constructor(private sharedHero: SharedHero, private router:Router){ }

    canActivate(route: ActivatedRouteSnapshot){
        const heroExists = !!this.sharedHero.getHero(+route.params['id'])

        if(!heroExists)
            this.router.navigate(['/404'])
        return heroExists
    }
}
