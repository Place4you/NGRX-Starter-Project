import { ɵɵviewQuerySignal } from '@angular/core';
import { addToBucket, removeFromBucket } from '../action/bucket.action';
import { Bucket } from './../../../models/bucket.model';
import { createReducer, on } from "@ngrx/store";

 const initialState:Bucket[] = []

 export const bucketReducer = createReducer(
  initialState,

  // Handle Add to Bucket
  on(addToBucket, (state, { payload }) => {
    const existingItem = state.find(item => item.id === payload.id);

    if (existingItem) {
      // Increase the quantity of the item
      return state.map(item =>
        item.id === payload.id 
        ? { ...item, quantity: item.quantity + payload.quantity } 
        : item
      );
    } else {
      // Add the new item
      return [...state, payload];
    }
  }),

  // Handle Remove from Bucket
  on(removeFromBucket, (state, { payload }) => {
    const existingItem = state.find(item => item.id === payload.id);

    if (existingItem && existingItem.quantity > 1) {
      // Decrease the quantity if it's more than 1
      return state.map(item =>
        item.id === payload.id 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
      );
    } else {
      // Remove the item if quantity is 1 or less
      return state.filter(item => item.id !== payload.id);
    }
  })
);



  