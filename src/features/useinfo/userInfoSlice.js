import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  loginUserInfo: null,
  teamInfo: null,
  myCalendar: null,
}
const userInfoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAllUserInfo: (state, action) => {
      state.userInfo = action.payload.data;
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
      state.userInfo.push(action.payload)
    },
    getAllTeamInfo: (state, action) => {
      const sortscore = action.payload.sort((a, b) => {
        return (b.winscore / (b.winscore + b.losescore)) - (a.winscore / (a.winscore + a.losescore))
      })
      state.teamInfo = sortscore;
    },
    getAllCalendarInfo: (state, action) => {
      console.log(action.payload);
      state.myCalendar = action.payload;
    },
    getLoginUserInfo: (state, action) => {
      console.log(action.payload);
      state.loginUserInfo = action.payload?.userId;
    },


  }
});

export const { getUserInfo, getAllUserInfo, pushUserInfo, getAllTeamInfo, getAllCalendarInfo, getLoginUserInfo } = userInfoSlice.actions;

export const selectUserList = state => state.userInfo.userInfo;
export const getTeamInfo = state => state.userInfo.teamInfo;
export const getMyCalendarInfo = state => state.userInfo.myCalendar;
export const getLoginUser = state => state.userInfo.loginUserInfo;

export default userInfoSlice.reducer;