import { Link } from "react-router-dom";


const Navbar = () => {


    return <div>
        <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='main.css')}}"></link>

        <nav className="navbar navbar-dark bg-dark">
        {/*-- Navbar content --*/}
    </nav>
    
    <nav className="navbar navbar-dark bg-primary">
    {/*-- Navbar content --*/}
    </nav>
    
    <nav className="navbar navbar-light" style={{'background-color': 'skyblue'}}>
        <ul className="nav nav-tabs" id="navbarToggle">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">홈</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/diary">글 목록</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">회원가입</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">로그인</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post/new">글쓰기</Link> {/*--여기 href 원래 url_for이었는데 수정해준 것---*/}
            </li>
            {/*} <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> --*/}
        </ul>
          
    </nav>

    
    </div>

}


export default Navbar