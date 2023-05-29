// 맨 위에 타이틀
// 그 아래에 내용 
// 등록, 취소 버튼
// 등록하기 버튼을 누르면은 index 페이지로 간다   

import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


function WritingPage({Todolist, setTodoList}){
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
   
    const navigate = useNavigate();

    const onChangeTitle = (e) => {
        setTitle(e.target.value)         
    }  
    const onChangeContents = (e) => {
        setContents(e.target.value)
    }
    
    const registerFunc = () => {     
        const obj = {
            id: uuidv4(),
            title: title, 
            contents: contents
        }          
        setTodoList([...Todolist, obj])  
        setTitle('')
        setContents('')
        navigate(`/`)          
    }

    return(
        <div>
            title
            <input onChange={onChangeTitle} value={title}/><br/>
            contents
            <textarea onChange={onChangeContents} value={contents}/><br/>
            <button onClick={registerFunc}>등록하기</button>              
        </div>
        
    )

}

export default WritingPage