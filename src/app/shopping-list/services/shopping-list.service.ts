import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredientList: Ingredient[]  = [
    new Ingredient('flour', 3),
    new Ingredient('tomato', 2)
  ];
  ingredientAdded = new EventEmitter<Ingredient[]>();

  constructor() { }

  getIngredients() {
    return this.ingredientList.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredientList.push(ingredient);
    this.ingredientAdded.emit(this.ingredientList.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredientList.push(...ingredients);
    this.ingredientAdded.emit(this.ingredientList.slice());
  }
}
