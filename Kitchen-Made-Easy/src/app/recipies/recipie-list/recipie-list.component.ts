import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.scss']
})
export class RecipieListComponent implements OnInit {

  recipies :Recipe[] = [
    new Recipe("Test Recipe","just Testing","https://www.seriouseats.com/2020/05/20200504-vegetable-pancakes-sho-spaeth1.jpg"),
    new Recipe("Test Recipe","just Testing","https://www.seriouseats.com/2020/05/20200504-vegetable-pancakes-sho-spaeth1.jpg")

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
