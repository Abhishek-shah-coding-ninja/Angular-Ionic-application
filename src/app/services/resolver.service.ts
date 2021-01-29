import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot } from '@angular/router';

import {DataService} from './data.service';



@Injectable({
  providedIn: 'root'
})
export class ResolverService {

  constructor(private dataServices:DataService) {  }

  
       resolve(route:ActivatedRouteSnapshot){
         let id= route.paramMap.get('id');
         return this.dataServices.getData(id)
       }
   
}
