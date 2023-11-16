import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: [],
  teamInfo: null,
  firstTeam: null,
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
      state.userInfo.push(action.payload)
    },
    getAllTeamInfo: (state, action) => {
      const sortscore = action.payload.sort((a, b) => {
        return (b.winscore / (b.winscore + b.losescore)) - (a.winscore / (a.winscore + a.losescore))
      })
      state.teamInfo = sortscore;
      console.log(action.payload);
    },


  }
});

export const { getUserInfo, getAllUserInfo, pushUserInfo, getAllTeamInfo } = userInfoSlice.actions;

export const selectUserList = state => state.userInfo.userInfo;
export const getTeamInfo = state => state.userInfo.teamInfo;

export default userInfoSlice.reducer;