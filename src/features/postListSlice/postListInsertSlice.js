import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postInsert: []
}

const postListInsertSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {

    getAllInsert: (state, action) => {
      state.postInsert.push(action.payload);
      console.log(state.postInsert);
      console.log(action.payload);
    },
    getAllUserPostList: (state, action) => {
      state.postInsert = action.payload;
    },
    
  }

})

export const { getAllInsert, getAllUserPostList } = postListInsertSlice.actions;

export const postInsertList = state => state.postList.postInsert;
export const userPostList = state => state.postList.postInsert;

export default postListInsertSlice.reducer;