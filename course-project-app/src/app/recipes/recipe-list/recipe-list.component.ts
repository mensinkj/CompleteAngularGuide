import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Joy Love Burger", "A Ridiculous Burger", "https://s3-media0.fl.yelpcdn.com/bphoto/zNYvfhQA1D1m3yKMoM4R0A/o.jpg"),
    new Recipe("Bacon Avocado Burger", "The most Delicious burger ever", "https://img.hoodline.com/uploads/story/image/102887/joy_love_burgers_custom.jpg"),
  ];



  constructor() { }

  ngOnInit() {
  }

  onRecipedSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
