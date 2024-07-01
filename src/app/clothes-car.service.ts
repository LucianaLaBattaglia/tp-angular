import { Injectable } from '@angular/core';
import { clothes } from './clothes-list/clothes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesCarService {
private _carList: clothes[]=[];
private _cant: number=0;
private _total: number=0;


carList: BehaviorSubject<clothes[]>=new BehaviorSubject (this._carList);
cant: BehaviorSubject<number>=new BehaviorSubject (this._cant);
total: BehaviorSubject<number>=new BehaviorSubject (this._total);
constructor() { }

addToCar(clothes:clothes){
  
  let item= this._carList.find((v1)=>v1.name == clothes.name);
  if(!item){
  this._carList.push({...clothes})
  
    
  }else{
    
     item.quantity=item.quantity + clothes.quantity;
  
  }

  this._total=this._total += (clothes.price*clothes.quantity);
  this.carList.next (this._carList);
  this.total.next(this._total);

}

deleteToCar(index: number){
   this._total=this._total - (this._carList[index].price*this._carList[index].quantity);
  this._carList.splice(index, 1);
  this.carList.next (this._carList);
  this.total.next(this._total);
  
}

emptycar(){

  this._carList.splice(0,this._carList.length)
  this._total=0;
  this.total.next(this._total)
}

}