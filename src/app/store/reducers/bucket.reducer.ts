import { ɵɵviewQuerySignal } from '@angular/core';
import { addToBucket } from '../action/bucket.action';
import { Bucket } from './../../../models/bucket.model';
import { createReducer, on } from "@ngrx/store";

 const initialState:Bucket[] = []

 export const bucketReducer = createReducer(
    initialState,
    on(addToBucket, (state, action) => {
  
      // Checks if Bucket list item already exists
      const existingItem = state.find(item => item.id === action.payload.id);
  
      if (existingItem) {
        // Increase the quantity of the item
        return state.map(item =>
             {
             return item.id === action.payload.id ? { ...item, quantity:item.quantity + action.payload.quantity} : item
            }
        );  
      } else {
        // Just add the item to the bucket list
        return [
          ...state,
          action.payload
        ];
      }
    })
  );
  