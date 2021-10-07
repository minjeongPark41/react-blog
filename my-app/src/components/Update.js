import React from 'react';
import { useEffect, useState } from 'react';
import {useRef} from 'react'
//import { useParams } from 'react-router-dom';
const Post = ({match}) => {
    // App.js에서 :id로 id를 받을 수 있게 되었으니 
    const {id} = match.params;
    console.log({id})
    const [j, setJ] = useState([]);
    console.log(match.params.id)
    useEffect(() => {
        console.log("useEffect를 알아보자") // 렌더링 후 + 컴포넌트 사라지기 전
        fetch(`/api/diary/${id}`)
        .then(response => response.json())
        .then(json=>{
                console.log(json);
                setJ(json);
    });
    }, [id]) // 의존성 배열

    function onSubmit(e){
        e.preventDefault();
        console.log(titleRef.current.value) // 이렇게 접근 가능
        console.log(contentRef.current.value)

        fetch("/api/update", {
            method: "POST",
            header:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                id : 4,
                content : contentRef.current.value,
                title : titleRef.current.value    
            }),
        }).then(res =>{
            if(res.ok){
                alert("success")
            }
        }) 
    }

    // 입력값들을 얻어오기 위해 useRef 사용 + 그리고 아래서 각 태그에 연결
    const titleRef = useRef(null) // 초기값은 null
    const contentRef = useRef(null)
    return <form onSubmit={onSubmit}>
        <table class="table">
                {j.map(jj => (
                    <tbody>
                        <tr>
                            <th>title</th>
                            <td colspan="3"><input type="text" ref={titleRef}/>{jj.title}</td>
                        </tr>
                        <tr>
                            <th>date</th>
                            <td colspan="3">{jj.date_posted}</td>
                        </tr>
                        <tr>
                            <th>content</th>
                            <td colspan="3"><input type="text" ref={contentRef}/>{jj.content}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
            <button>Update</button>
        </form>
} 
export default Post;