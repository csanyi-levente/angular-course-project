import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../model/recipe.model';
import {RecipeService} from '../services/recipe.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients)
  }
}
