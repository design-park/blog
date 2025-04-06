/* eslint-disable */

import { useState } from 'react'
import './App.css'

function App() {
  let [postTitle, setPostTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likes, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [clickedTitleIndex, setclickedTitleIndex] = useState(0);
  let [textInput, setTextInput] = useState('');

  return (
    <div className = "App">
      <div className = "black-nav">
        <h4>지현이의 블로그</h4>
      </div>

      {
        postTitle.map(function(a, i) {
          return (
            <div className = "list" key = {i}>
              <h4 onClick = {() => {
                if (clickedTitleIndex == i) {  // if we click on the one that was already clicked
                  setModal(!modal);
                } else {
                  setclickedTitleIndex(i);
                  setModal(true);
                }
              }}> 
                {postTitle[i]} 
                <span onClick = { (e) => { 
                  e.stopPropagation(); // 부모 요소의 onClick 이벤트가 발생하지 않도록 함
                  let copy = [...likes];
                  copy[i] += 1;
                  setLikes(copy);
                  } }> 👍</span> 
                {likes[i]} 
              </h4>
              <p>날짜</p>
              <button onClick = { () => {
                let copy = [...postTitle];
                copy.splice(i, 1);
                setPostTitle(copy);
              }}>삭제</button>
            </div>)
        })
      }

      <div className="post">
        <input onChange ={ (e) => {
          setTextInput(e.target.value);
        }}/>
        <button onClick = { () => {
          let copy = [...postTitle];
          copy.unshift(textInput);
          setPostTitle(copy);
        }}>글 발행</button>
      </div>

      {
        modal == true ? <Modal postTitle={postTitle} clickedTitleIndex={clickedTitleIndex}></Modal> : null
      }
    </div>
  )
}

function Modal(props) {
  return (
    <div className = "modal">
      <h4>{ props.postTitle[props.clickedTitleIndex] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick>수정</button>
    </div>
  )
}


/*
function Modal(props) {
  let [clicked, setClicked] = useState(false);
  return (
    <div className = "modal">
      <h4>{ clicked ? "여자 코트 추천" : props.postTitle[props.clickedTitleIndex] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick = { () => {
        setClicked(true);
       }}>글 수정</button>
    </div>
  )
}
*/

export default App
