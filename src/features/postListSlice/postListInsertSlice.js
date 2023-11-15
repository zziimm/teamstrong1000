import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postInsert: [],
  selectPost: null,
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
    getAllUserPostList: (state, action) => { // 더미데이터
      state.postInsert = action.payload;
    },
    sortList: (state) => {
      state.postInsert.sort((a, b) => new Date(a.selectDate) - new Date(b.selectDate))
    },
    getSelectPost: (state, action) => {
      console.log(action.payload);
      state.selectPost = action.payload
    },
    clearSelectedPost: (state) => {
      state.selectPost = null;
    },

  }

})

export const { getAllInsert, getAllUserPostList, sortList, getSelectPost, clearSelectedPost } = postListInsertSlice.actions;

export const postInsertList = state => state.postList.postInsert;
export const selectedPost = state => state.postList.selectPost;
export const userPostList = state => state.postList.postInsert;

export default postListInsertSlice.reducer;