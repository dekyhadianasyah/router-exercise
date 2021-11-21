import { useHistory,Route, BrowserRouter as Router, Link } from 'react-router-dom';
import Chart from './screens/chart';
import Login from './screens/Login';
// import './App.css';
import { useEffect, useState } from 'react';
import Logout from './screens/Logout';

function App() {
  const [isAuth , setAuth] = useState()

  // // const isAuth =  localStorage.getItem('auth') === 'true'
  // useEffect(() => {
  //   // console.log('1')
  //   // console.log(isAuth)
  //   setAuth(localStorage.getItem('auth'))
  // },[])
  const history = useHistory()

  const login = (usernaName, password) => {
    if (usernaName === 'root' && password === 'password')
    {       
      localStorage.setItem('auth', JSON.stringify({ id: 1 }));
      setAuth(true);
      return history.push('/chart')
    }
    else{
      alert('username/password')
    }
          

  };

   // const onLogin = () => {
    //         if (userName === 'root' && userPassword === 'password')
    //         {
               
    //             // console.log('login')
    //             // localStorage.setItem('auth', 'true')

    //             // return history.push('/chart')
    //         }
    //         else{
    //           alert('username/password')
    //         }

    // }

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    return history.push('/');
  };
  
  return (

   <>
      <ul>
        { !isAuth && <li> <Link to="/login">Login</Link></li>}
        { isAuth && <li> <Link to="/logout" onClick={()=>logout()}>Logout</Link></li>}
        
      </ul>
      <div className="App">
     
          <Route exact path ="/login">
              <Login onLogin={login} test={'test ya'}/>
          </Route>
          <Route exact path ="/chart">
              <Chart/>
          </Route>
          <Route exact path ="/logout">
              <Logout/>
          </Route>
      </div>

      </>
  );

 
}

export default App;
