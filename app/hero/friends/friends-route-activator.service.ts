import {Injectable} from '@angular/core'
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router'
import { SharedHero } from '../shared/hero.service' 

@Injectable()
export class FriendsRouteActivator implements CanActivate {    
    constructor(private sharedHero: SharedHero, private router:Router){ }

    canActivate(route: ActivatedRouteSnapshot){
        const friendExists = !!this.sharedHero.getFriend(+route.params['id'])

        if(!friendExists)
            this.router.navigate(['/404'])
        return friendExists
    }
}