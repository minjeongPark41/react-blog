import React from 'react';
import {useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


function Diary() {
    const [j, setJ] = useState([]);
    // eslint-disable-next-line

    useEffect(() => {
        console.log("useEffect를 알아보자") // 렌더링 후 + 컴포넌트 사라지기 전
        fetch("/api/diary")
        .then(response => response.json())
        .then(json=>{
                console.log(json);
                setJ(json);
            
    });


    }, []) // 의존성 배열

    return(
        <div>
            <tabel>
                <tbody>
                    {j.map(jj => (
                        <div><Link to={`/post/${jj.id}`}>{jj.title}</Link></div>
                    ))}  
                </tbody>
            </tabel>
        </div> 

       
    )

}



export default React.memo(Diary); 



        
