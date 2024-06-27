import { Component, OnInit } from '@angular/core';
import { ClothesCarService } from '../clothes-car.service';
import { clothes} from '../clothes-list/clothes';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})
export class CarComponent implements OnInit{


carList$: Observable <clothes[]>;
total$: Observable <number>;

  constructor(private car: ClothesCarService){
    this.carList$= car.carList.asObservable();
    this.total$= car.total.asObservable();

  }

ngOnInit(): void{

}
deleteToCar(indice:number){
  let cant=
  this.car.deleteToCar(indice);
 
}

empycar(){
  this.car.empycar();
}

getPrecioItem(clothes:clothes):number{
  return clothes.quantity*clothes.price
}


}