import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

    console.log(j[0]);


    function remove() {
        console.log("삭제 확인");
        window.confirm("delete?");
    }



    return <div>
        <table class="table">
                {j.map(jj => (
                    <tbody>
                        <tr>
                            <th>title</th>
                            <td colspan="3">{jj.title}</td>
                        </tr>
                        <tr>
                            <th>date</th>
                            <td colspan="3">{jj.date_posted}</td>
                        </tr>
                        <tr>
                            <th>content</th>
                            <td colspan="3">{jj.content}</td>
                        </tr>
                    </tbody>
                ))}
            </table>

            <div>

                <Link className="btn btn-primary" to={`/update/${id}`}>Update</Link>
                <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</button>
                
            </div>


            {/*-- Modal --*/}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete Post?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            정말로 삭제하시겠습니까?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <form action="{{ url_for('delete_post', post_id=post.id) }}" method="POST">
                                <input className="btn btn-danger" type="submit" value="Delete" onClick={() => remove()}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>


} 

export default Post; 
