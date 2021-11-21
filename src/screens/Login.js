import { useState } from "react"
import {useHistory} from "react-router-dom"

export default (props) =>{

    const [userName , setUserName] = useState()
    const [userPassword, setUserPassword] = useState()

    const history = useHistory()

    const onLogin = () => {
            // if (userName === 'root' && userPassword === 'password')
            // {
               
            //     // console.log('login')
            //     // localStorage.setItem('auth', 'true')

            //     // return history.push('/chart')
            // }
            // else{
            //   alert('username/password')
            // }            
            props.onLogin(userName, userPassword)
             setUserName('1')
             setUserPassword('')
    }
    return (

        <>
            <h1>Login page</h1>
            <div className="row">
                <div className="col-sm-3">
                    <span>Username</span>
                </div>
                <div className="col-sm-6">
                <input type="text"
                 onChange={(e) => setUserName(e.target.value)} 
                />

                </div>
               
            </div>

            <div className="row">
                <div className="col-sm-3">
                    <span>Password</span>
                </div>
                <div className="col-sm-6">
                <input type="password"
                     onChange={(e) => setUserPassword(e.target.value)} 
                />
                </div>
               
            </div>

            <div className="row">
                {/* <button onClick={() => props.onLogin(userName, userPassword)}>Login</button> */}
                <button onClick={() => onLogin()}>Login</button>

            </div>

        </>
    )

}