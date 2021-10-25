import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Joy Love Burger", "The most Delicious burger ever", "https://s3-media0.fl.yelpcdn.com/bphoto/zNYvfhQA1D1m3yKMoM4R0A/o.jpg"),
    new Recipe("Joy Love Burger", "The most Delicious burger ever", "https://s3-media0.fl.yelpcdn.com/bphoto/zNYvfhQA1D1m3yKMoM4R0A/o.jpg"),
  ];



  constructor() { }

  ngOnInit() {
  }

}
