import { createReducer } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";

const initalState : Grocery[] =[
    { "id": 1, "name": "mango","type":"fruit"},
    { "id": 2, "name": "Ghobi","type":"vegetable"},
    { "id": 3, "name": "bhinid","type":"vegetable"},
    { "id": 4, "name": "apple","type":"fruit"},
]

 export const groceryReducer = createReducer(initalState);