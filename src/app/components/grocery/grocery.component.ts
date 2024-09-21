import { Grocery } from './../../../models/grocery.model';
import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  groceries$?:Observable<Grocery[]>;

  constructor(private store:Store<{groceries:Grocery[]}>){
    this.groceries$ =  store.select("groceries");
  }


  onTypeChange(event: Event){

  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }


  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name
    }



  }

}
