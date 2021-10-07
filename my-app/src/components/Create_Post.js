import {useRef} from 'react'

function Create_Post(){

    // button 누르면 새로고침되는거 방지하기 위해
    // <form 옆에 적어서는 <form> 태그와 연결시켜주고
    function onSubmit(e){
        e.preventDefault();
        console.log(titleRef.current.value) // 이렇게 접근 가능
        console.log(contentRef.current.value)

        fetch("/api/post/new", {
            method: "POST",
            header:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
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
        <div className="input_area">
            <label>Title</label>
            <input type="text" placeholder="제목을 입력해주세요" ref={titleRef}/>     
        </div>
        <div className="input_area">
            <label>Content</label>
            <input type="text" placeholder="내용을 입력해주세요" ref={contentRef}/>     
        </div>
        <button>저장</button>
    </form>


} 

export default Create_Post; 
