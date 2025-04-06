/* eslint-disable */

import { useState } from 'react'
import './App.css'

function App() {
  let [postName, setPostName] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [likes, setLikes] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [clickedIndex, setClickedIndex] = useState(0);

  return (
    <div className = "App">
      <div className = "black-nav">
        <h4>블로그임</h4>
      </div>

      {
        postName.map(function(a, i) {
          return (
            <div className = "list" key = {i}>
              <h4 onClick = { () => {
                setClickedIndex(i);
                setModal(!modal)}}> 
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
        modal == true ? <Modal postName={postName} setPostName={setPostName} clickedIndex={clickedIndex}></Modal> : null
      }
    </div>
  )
}

function Modal(props) {
  return (
    <div className = "modal">
      <h4>{ props.postName[props.clickedIndex] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
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
