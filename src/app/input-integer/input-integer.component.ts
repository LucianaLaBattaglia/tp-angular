import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

constructor(){}

  

  @Input()
  quantity: number=0;

  @Output()
  quantityChange:EventEmitter<number>=new EventEmitter();

  @Input()
  max:number=0;

  upQuantity(): void{
    if(this.max> this.quantity){
  this.quantity++;
  this.quantityChange.emit(this.quantity);
    }
  }
  
  downQuantity(): void{
    if(this.quantity>1){
    this.quantity--;
    this.quantityChange.emit(this.quantity);
    }
    }

  changeQuantity(){
  
    if(this.max< this.quantity){
      alert("la cantidad supera el stock disponible")
      this.quantity=this.max;   
      }
     
      else if (this.quantity<1){
      alert("ingrese un numero positivo")
      this.quantity=1
      
      }
      
      this.quantityChange.emit(this.quantity);
      
    }
    }
  
  



