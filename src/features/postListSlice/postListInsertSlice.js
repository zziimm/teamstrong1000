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
    // handleFilterAll: (state, action) => {
    //   console.log(action.payload);
    //   const items = state.postInsert.filter((item) => item.district === '서울')
    //   state.postInsert = items
    // },
    // handleFilter: (state) => {
    //   const items = state.postInsert.filter((item) => item.district === '인천')
    //   state.postInsert = items
    // },
  }

})

export const { getAllInsert, getAllUserPostList, handleFilterAll ,handleFilter } = postListInsertSlice.actions;

export const postInsertList = state => state.postList.postInsert;
export const userPostList = state => state.postList.postInsert;

export default postListInsertSlice.reducer;