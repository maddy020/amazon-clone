import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState={
    items:[],
};

export const basketSlice=createSlice({
name:"basket",
initialState,
reducers:{
addToBasket:(state,action)=>{
  state.items=[...state.items,action.payload]; 
},
removeFromBasket:(state,action)=>{
 const index=state.items.findIndex((basketItem)=>basketItem.id===action.payload.id);
 let newBasket=[...state.items]
 if(index>=0){
    newBasket.splice(index,1);
 }
 else{
  console.warn(`Can not remove id:${action.payload.id} does not exist in the Basket`);
 }
 state.items=newBasket;
},

}
}); 
export const {addToBasket,removeFromBasket}=basketSlice.actions;
export const selectItems=(state)=>state.basket.items;
export const selectTotal=(state)=>state.basket.items.reduce((total,item)=>total+item.price,0);

export default basketSlice.reducer;
  


