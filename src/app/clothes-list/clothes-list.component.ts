import { Component } from '@angular/core';
import {clothes} from './clothes';
import { ClothesCarService } from '../clothes-car.service';
import { ClothesDataService } from '../clothes-data.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrl: './clothes-list.component.scss'
})
export class ClothesListComponent {

clothess: clothes[]=[];



constructor(private car: ClothesCarService, private clothesDataService: ClothesDataService){

  
}
ngOnInit(): void{
  this.clothesDataService.getAll()
  .subscribe(clothess=>this.clothess=clothess)
}

addToCar(clothes:clothes){
  this.car.addToCar(clothes);
  clothes.stock-=clothes.quantity;
  clothes.quantity=0;

}
deleteToCar(indice:number){
  this.car.deleteToCar(indice);
  
  

}




}

