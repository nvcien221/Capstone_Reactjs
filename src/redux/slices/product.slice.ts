import {createSlice} from '@reduxjs/toolkit'
import { TypeCardItem } from 'src/types'

const initialState = {
    listProduct: [] as TypeCardItem[]
}
 
const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers:{
        setListProduct: (state, action) =>{
            // console.log({action})
            state.listProduct = action.payload
        }
    }

})
// action creative
export const {setListProduct} = productSlice.actions
export default productSlice.reducer