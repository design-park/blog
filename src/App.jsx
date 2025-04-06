/* eslint-disable */

import { useState } from 'react'
import './App.css'

function App() {
  let [postName, setPostName] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likes, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

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

      {
        postName.map(function(a, i) {
          return (
            <div className = "list" key = {i}>
              <h4 onClick = { () => {setModal(!modal)}}> 
                {postName[i]} 
                <span onClick = { () => { 
                  let copy = [...likes];
                  copy[i] += 1;
                  setLikes(copy);
                  } }> 👍</span> 
                {likes[i]} 
              </h4>
              <p>날짜</p>
            </div>)
        })
      }

      {
        modal == true ? <Modal postName={postName} setPostName={setPostName}></Modal> : null
      }
    </div>
  )
}

function Modal(props) {
  return (
    <div className = "modal">
      <h4>{ props.postName[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick = { () => {
        props.setPostName(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
       }}>글 수정</button>
    </div>
  )
}

/*
function Modal(props) {
  let [copy, setCopy] = useState([...props.postName]);
  return (
    <div className = "modal">
      <h4>{ copy[0] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick = { () => {
        copy[0] = '여자 코트 추천';
        setCopy(copy);
       }}>글 수정</button>
    </div>
  )
}
*/
export default App
