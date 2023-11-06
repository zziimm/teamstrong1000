import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: []
}
const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfo: (state, { payload: inputInfo }) => {
      const targetInfo = state.userInfo.find(info => info.id === inputInfo.id)
      if (targetInfo) {
        alert('이미 가입된 아이디 입니다.')
        return;
      } else {
        state.userInfo.push(inputInfo)
      }
    },
    loginController: (state, { payload: loginInfo }) => {
      
    },
  }
});

export const { getUserInfo } = userInfoSlice.actions;

export const selectUserList = (state) => state.user.userInfo;

export default userInfoSlice.reducer;