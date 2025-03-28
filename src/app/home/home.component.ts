import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Recipe } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private MyServices:MyServiceService) {

  }

  ngOnInit(): void {
    this.getRecipes();
  }

  navigateToRecipe() {
    
  }
  
  recipes:any;

  getRecipes() {
    console.log("From Home Component");
      this.MyServices.getData().subscribe((res:any)=>{
      this.recipes = res.recipes;
    }, (err)=>{
      console.log(err);
    })
  }
}