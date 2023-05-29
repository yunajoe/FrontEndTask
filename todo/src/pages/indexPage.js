/*
글쓰기 버튼을 누르면은 
맨 위에 타이틀
그 아래에 내용 
등록, 취소 버튼  
인덱스 페이지는 리스트의 타이틀>> 리스트에서 클릭하면은 타이틀, 내용 
글쓰기 페이지는 타이틀, 내용, 등록, 취소 
*/
import { useState } from "react"     

function IndexPage({Todolist}){

    return(
        <div>
            {Todolist.map((obj) => {
                return <div key={obj.id}>   
                {obj.title}                
                </div>
            })}         
        </div>
        
    )

}
export default  IndexPage