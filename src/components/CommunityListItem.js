import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommunityComment from './CommunityComment';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CommunityListItemWrapper = styled.div`
  box-sizing: border-box;
  width: 417px;
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  text-align: left;
  padding: 9px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 75px;
  }
& + & {
  margin-top: 18px;
}
img {
  width: 200px;
  height: 200px;
}
.div-between {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
.div-center {
  display: flex;
  justify-content: center;
  margin: 10px;
}
.div-start {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px;
}
.id {
  color: #4610C0;
  font-weight: 800;
  font-size: 18px;
}
.date {
  color: #9b9b9b;
  font-size: 14px;
}

.콘텐츠줄임표 {
  font-size: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  flex: 4;
}

.말줄임표없을때 {
  font-size: 18px;
  flex: 4;
  overflow: visible;
  display: block;
  -webkit-line-clamp: 0;
}
.morebtn {
  background-color: #fff;
  border: none;
}
.경과일 {
  color: red;
  flex: 1;
}
.material-symbols-outlined {  // 구글 머터리얼 아이콘
  background-color: #fff;
  border: none;
}
.googlered {
  color: red;
  font-weight: bold;
}
`;


function CommunityListItem(props) {
  const navigate = useNavigate();

  const [more, setMore] = useState(false);
  const [iconRed, setIconRed] = useState(false);
  const [comment, setComment] = useState(true);
  const [like, setLike] = useState(0);
  
  useEffect(() => {
    const setL = async() => {
      await setLike(props.like)
    }
    setL();
  }, []);
  
  const postId = props.postId;
  
  const aaa = new Date(2023, 7, 5) // 게시글 입력 날짜 계산
  function elapsedTime(date) {
    const start = new Date(date);
    const end = new Date();
    const diff = (end - start) / 1000;
    const times = [
      { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
      { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
      { name: '일', milliSeconds: 60 * 60 * 24 },
      { name: '시간', milliSeconds: 60 * 60 },
      { name: '분', milliSeconds: 60 },
    ];
    for (const value of times) {  
      const betweenTime = Math.floor(diff / value.milliSeconds);
  
      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`;
      }
    }
    return '방금 전';
  }

  const handleMore = () => {    // 더보기 함수
    setMore(!more)
  }
  const handleRed = () => {     // 좋아요 ture/false 함수
    setIconRed(!iconRed)
  }
  const handleComment = () => {    // 댓글창 함수
    setComment(!comment)
  }
  const handleLike = async() => {     // 좋아요 + 패치 함수
    setLike(Number(`${iconRed ? like - 1 : like + 1 }`))
    try {
      const id = props.postId
      const result = await axios.patch(`/community`, { like, id });
    } catch (err) {
      console.error(err);
    }
  }
  const handleDelete = async () => {    // 게시글 삭제
    try {
      const result = await axios.post(`/community/delete`, { postId });
      // console.log(result);
      if (result.data.flag) {
        
        // 스테이트.remove()     게시글 삭제 새로고침 없이 어케하누
      }

    } catch (err) {
      console.error(err);
    }
  }
  const handleEdit = async () => {       // 게시글 삭제
      navigate(`/CommunityEdit/${postId}`);
  }
  
  return (
    <CommunityListItemWrapper>
        {<div className='div-between'>
          <span className='id'>{props.userNic}</span>
          <span className='date'>{aaa.getFullYear()}/{(aaa.getMonth() + 1)}/{aaa.getDate()}</span>
        </div>}

      { comment ?
        <>
        {<div className='div-center'>
          <img src={props.imagePath}/>
        </div>}

        {<div className='div-between'>
          <span
            className={`콘텐츠줄임표 ${more ? "말줄임표없을때" : "콘텐츠줄임표"}`}
          >
            {props.content}
          </span>
          <button
            className='morebtn'
            type='button'
            value={more}
            onClick={() => {handleMore()}}
            >
              {`${more ? "" : '더보기'}`}
            </button>
          <span className='경과일'>{elapsedTime(aaa)}</span>
        </div>}
        </>
        : <CommunityComment postId={props.postId} />  // 댓글창
      }

      {<div className='div-between'>
        {<div>
          <button 
            class={`${iconRed ? "material-symbols-outlined googlered" : "material-symbols-outlined"}`}
            value={iconRed}
            onClick={() => {handleRed();  handleLike();}}
          >
            favorite
          </button>
          <span>{like}</span>   {/* 좋아요 수 */}
          <button 
            class="material-symbols-outlined"
            value={comment}
            onClick={() => {handleComment()}}
            >mode_comment
          </button>
        </div>}
        <form>
          <button onClick={() => { handleDelete() }}>🗑</button>
          <button onClick={() => { handleEdit()  }}>🖌</button>
        </form>
      </div>}
      </CommunityListItemWrapper>
  );
}

export default CommunityListItem;