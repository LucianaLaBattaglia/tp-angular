import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { clothes } from './clothes-list/clothes';

const URL= "https://6670db770900b5f8724bc827.mockapi.io/clothes"

@Injectable({
  providedIn: 'root'
})
export class ClothesDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<clothes[]>{

    return this.http.get<clothes[]>(URL).pipe(
      tap((clothess:clothes[])=>clothess.forEach(clothes => clothes.quantity=1)));
  }

}
