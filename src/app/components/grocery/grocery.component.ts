import { Grocery } from './../../../models/grocery.model';
import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/action/bucket.action';


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


  // Increment item quantity
increment(item: Grocery) {
  const payload = {
    id: item.id,
    name: item.name,  // Ensure that 'name' is needed here
    quantity: 1      // Always increase by 1
  };
  this.store.dispatch(addToBucket({ payload }));
}

// Decrement item quantity
decrement(item: Grocery) {
  const payload = {
    id: item.id,
    quantity: 1  // Always decrease by 1, even if this isn't sent in reducer, for consistency
  };
  this.store.dispatch(removeFromBucket({ payload }));
}


}


