import { Component, OnInit } from '@angular/core';
import {Recipe} from '../model/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('dummy', 'test', 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/foods-that-lower-cholesterol-1296x728-feature.jpg?w=1155&h=1528')
  ];

  constructor() { }

  ngOnInit() {
  }

}
