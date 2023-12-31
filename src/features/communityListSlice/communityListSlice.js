import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  communityInsert: []
}

const communityListSlice = createSlice({
  name: 'community',
  initialState,
  reducers: {

    // getAllCommunityInsert: (state, action) => {
    //   state.communityInsert.push(action.payload.data);
    // },
    getAllUserCommunityList: (state, action) => { // 더미데이터
      state.communityInsert = action.payload;
    },
    
  }

})

export const { getAllUserCommunityList, getAllCommunityInsert } = communityListSlice.actions;

// export const communityInsertList = state => state.communityList.communityInsert;
export const userCommunityList = state => state.communityList.communityInsert;
// export const CommunityInsertList = state => state.communityList.communityInsert;

export default communityListSlice.reducer;