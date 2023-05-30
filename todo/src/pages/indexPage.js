/*
글쓰기 버튼을 누르면은 
맨 위에 타이틀
그 아래에 내용 
등록, 취소 버튼  
인덱스 페이지는 리스트의 타이틀>> 리스트에서 클릭하면은 타이틀, 내용 
글쓰기 페이지는 타이틀, 내용, 등록, 취소 
편집하기 버튼을 클릭하면은 
글의 title과 내용이 보이고 수정할 수 있게 된다 
*/
import { useState } from "react"     
import { useNavigate } from "react-router-dom";

function IndexPage({Todolist, setTodoList}){         
    const navigate = useNavigate();

    const deletefunc = (todoId) => {
        setTodoList(Todolist.filter((obj) => obj.id !== todoId))
    }  

    const editfunc = (todoId) => {
        navigate(`/edit`)
    }
    return(
        <div>
            {Todolist.map((obj) => {
                return (
                <div key={obj.id}>   
                {obj.title}    
                <button onClick={() => deletefunc(obj.id)}>삭제하기</button>     
                <button onClick={editfunc}>수정하기</button>          
                </div>)
            })}         
        </div>          
    )  
}
export default  IndexPage
