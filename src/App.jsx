/* eslint-disable */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [postName, setPostName] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likes, setLikes] = useState(0);

  return (
    <div className = "App">
      <div className = "black-nav">
        <h4>블로그임</h4>
      </div>

      <button onClick = { () => {
        let copy = [...postName];
        copy[0] = '여자 코트 추천';
        setPostName(copy);
      } }>첫 글 제목 바꾸기</button>

      <button onClick = { () => {
        let copy = [...postName];
        copy.shift();
        copy.unshift('성공')
        setPostName(copy);
      } }>첫 글 제목 바꾸기</button>

      <button onClick = { () => {
        let copy = [...postName];
        copy.sort();
        setPostName(copy);
      } }>가나다 정렬</button>


      <div className = "list">
        <h3>{postName[0]} <span onClick={() => { setLikes( likes + 1 ) }}>👍</span> {likes} </h3>
        <p>날짜</p>
      </div>
      <div className = "list">
        <h3>{postName[1]}</h3>
        <p>날짜</p>
      </div>
      <div className = "list">
        <h3>{postName[2]}</h3>
        <p>날짜</p>
      </div>

      <Modal></Modal>
    </div>
  )
}

function Modal() {
  return (
    <div className = "modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App
