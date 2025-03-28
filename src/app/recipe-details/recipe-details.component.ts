import { Component, OnInit, Type } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent implements OnInit{

  recipeId:any;
  recipeDetails:any;
  isLoading:boolean = true;

  constructor(private myService:MyServiceService, private activatedRouter:ActivatedRoute){

  }
  ngOnInit(): void {
    this.recipeId = this.activatedRouter.snapshot.paramMap.get("id");
    this.getRecipe(this.recipeId);
  }

  getRecipe(id:any) {
    this.myService.getRecipeDetails(id).subscribe((res)=>{
      this.recipeDetails = res;
      this.isLoading = false;
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }
}
