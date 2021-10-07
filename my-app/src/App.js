import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Navbar from './components/inc/Navbar';
import Index from './components/Index';
import Diary from './components/Diary';
import Register from './components/Register';
import Login from './components/Login';
import Create_Post from './components/Create_Post';
import Post from './components/Post';
import Update from './components/Update';
// eslint-disable-next-line 
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const App=() => {
  const [j,setJ] = useState([]);
  // eslint-disable-next-line
  const [title, setTitle] = useState([]);
  // eslint-disable-next-line
  const [content, setContent] = useState([]); 
  // eslint-disable-next-line
  const [datepost, setDatepost] = useState([]);

  // 1. rendering 되고 한 번만 해주기 위해 useEffect 사용
  //  ComponentDidMount, ComponentWillUnMount, ComponentDidUpdate를 합쳐놓은 개념
  useEffect(()=>{
    console.log("mount될 때만 실행시켜주자") // 렌더링 후 + 컴포넌트 사라지기 전
    fetch('/api/diary')
    .then(response => response.json())
    .then(json=>{
            console.log(json);
            setJ(json);
            
    });

  }, []); // [] 빈 배열로 '한 번만' 실행해주겠다는 것

  

  // 2. j로 setState 시켜주었으니, 필요한 정보를 나눠 가지기

  var tempTitle = [];
  // eslint-disable-next-line
  var tempContent = [];
  // eslint-disable-next-line
  var tempDatepost = [];

  j.forEach((elem, i) => {
    
    tempTitle.push(elem.title);
    // tempContent.push(elem.content);
    // tempDatepost.push(elem.datepost);

  });
  console.log(tempTitle.length)

    // setTitle(tempTitle);
    // setContent(tempContent);
    // setDatepost(tempDatepost);

    // ------------------------------------------------- 



  return (<>
  
    

    <Router>
        <div className="App">
      <Navbar />
      <Link to="/post/id"></Link>

      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/diary"  render={()=> <Diary titleList={title}/>} />
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/post/new" component={Create_Post}/>
        <Route path="/post/:id" component={Post}/>
        <Route path="/update/:id" component={Update}/> 
      </Switch>

      </div>
    </Router>

    </>


);

}

  


export default React.memo(App);
