import {Injectable} from '@angular/core'
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { SharedHero } from '../shared/hero.service' 

@Injectable()
export class EnemyRouteActivator implements CanActivate {    
    constructor(private sharedHero: SharedHero, private router:Router){ }

    canActivate(route: ActivatedRouteSnapshot){
        const enemyExists = !!this.sharedHero.getEnemy(+route.params['id'])

        if(!enemyExists)
            this.router.navigate(['/404'])
        return enemyExists
    }
}