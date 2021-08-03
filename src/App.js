import React, {useState, useEffect} from 'react';
import './App.css';
import Auth from './Components/Auth/Auth';
import '../src/Components/Landing/landingpage.css'
// import Auth from './Components/Auth/Auth';
import T from './T';
// import Login from './Components/Auth/Sign-Log/Login'; 
// import Signup from './Components/Auth/Sign-Log/Signup';
import Landing from './Components/Landing/LandingPage';
// import Signup from './Components/Auth/Sign-Log/Signup';
// import Login from './Components/Auth/Sign-Log/Login';
import Create from './Components/Character/CharCreate';
// import Auth from './Components/Auth/Auth'
import { Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Footer from './Components/Footer/Footer'
import Test from './Test.js';

function App() {
  const [toggle, setToggle] = useState(true);
  const Tog = () => setToggle(!toggle)


  // const [sessionToken, setSessionToken] = useState('');

  // useEffect(() => {
  //   if (localStorage.getItem('token')){
  //     setSessionToken(localStorage.getItem('token'));
  //   }
  // }, [])

  // const updateToken = (newToken) => {
  //   localStorage.setItem('token', newToken);
  //   setSessionToken(newToken)
  //   console.log(sessionToken);
  // }

  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken('');
  // }


  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    // : <Auth updateToken={updateToken}/>)

    // style={{width: "1200px",
    // margin: "0 auto"}}

  return (
    <div>
      { toggle ? <Landing/> : <Auth/>}
      { toggle ? 
      <Router>
        <React.Fragment>
          <Switch>
            <div className="landingpage-btn">            
              <Link to="/login" className="landingpage-link">
              <button onClick={Tog} className='button'>Start Here!</button>
              </Link>
            </div>
          </Switch>
        </React.Fragment>
      </Router> 
      : null}
      {/* <Login /> */}
      {/* {toggle ? <Auth/> : null} */}
      {/* <Signup style={{alignText: 'center'}}/>
      <Login style={{alignText: 'center'}}/> */}
      <Test />
      <T />
      <Create/>
      {/* <Create/> */}
      {/* <Landing />
      <button onClick={Tog} className='button'>Start Here!</button>
      {toggle ? <Auth/> : null} */}
      <Footer />
    </div>
  );
}

export default App;
