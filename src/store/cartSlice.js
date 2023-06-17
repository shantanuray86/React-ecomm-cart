const {createSlice} = require("@reduxjs/toolkit");

const initialState =[];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
           // var np = action.payload;
            const existingIndex = state.findIndex(
                (item) => item.id === action.payload.id
              );
              if (existingIndex >= 0) {
               
                  state[existingIndex].cartQuantity = state[existingIndex].cartQuantity  + 1;
             
              } else {
                console.log(action.payload);
                action.payload.cartQuantity = parseInt(parseInt(action.payload.cartQuantity??0)  + 1);
                state.push(action.payload);
              }
            
            
        },
        remove(state,action){
            return state.filter(item=>item.id !== action.payload);
        }
    }
});

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;

