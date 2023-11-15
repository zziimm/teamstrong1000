import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: []
}
const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUserInfo: (state, action) => {
      state.userInfo = action.payload;
      console.log(action.payload);
      console.log(state.userInfo);
    },
    getUserInfo: (state, { payload: inputInfo }) => {
      const targetInfo = state.userInfo.find(info => info.id === inputInfo.id)
      if (targetInfo) {
        alert('이미 가입된 아이디 입니다.')
        return;
      } else {
        state.userInfo.push(inputInfo)
      }
    },
    pushUserInfo: (state, action) => {
      console.log(action.payload);
      state.userInfo.push(action.payload)
      console.log(state.userInfo);
    },


  }
});

export const { getUserInfo, getAllUserInfo, pushUserInfo } = userInfoSlice.actions;

export const selectUserList = state => state.userInfo.userInfo;

export default userInfoSlice.reducer;