import { Component } from '@angular/core';
import {clothes} from './clothes';
import { ClothesCarService } from '../clothes-car.service';
import { ClothesDataService } from '../clothes-data.service';
import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss'
})
export class ClothesListComponent {

clothess: clothes[]=[];
cant$: Observable <number>;


constructor(private car: ClothesCarService, private clothesDataService: ClothesDataService){
  this.cant$= car.cant.asObservable();
  
  
}
ngOnInit(): void{
  this.clothesDataService.getAll()
  .subscribe(clothess=>this.clothess=clothess)
}

addToCar(clothes:clothes){
  this.car.addToCar(clothes);
  clothes.stock-=clothes.quantity;
  clothes.quantity=1;

}
deleteToCar(indice:number){
  this.car.deleteToCar(indice);
  
  

}




}

