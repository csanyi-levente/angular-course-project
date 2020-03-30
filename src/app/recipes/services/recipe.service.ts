import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('dummy', 'test', 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/foods-that-lower-cholesterol-1296x728-feature.jpg?w=1155&h=1528'),
    // tslint:disable-next-line:max-line-length
    new Recipe('dummy recipe', 'test', 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/foods-that-lower-cholesterol-1296x728-feature.jpg?w=1155&h=1528'),
    // tslint:disable-next-line:max-line-length
    new Recipe('test recipe', 'test', 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/foods-that-lower-cholesterol-1296x728-feature.jpg?w=1155&h=1528')
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
