import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  isLogged:boolean = true;

  constructor(private http:HttpClient) {

   }

   url = "https://forkify-api.herokuapp.com/api/search?q=pizza";

   getData() {
    console.log("From Service")
    return this.http.get(this.url);
   }

   getRecipeDetails(id:any) {
    const url = `https://forkify-api.herokuapp.com/api/get?rId=${id}`;
    return this.http.get(url);
   }
}
