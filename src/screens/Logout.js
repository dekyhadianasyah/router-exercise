import { useEffect } from "react"
import { Route, useHistory } from "react-router-dom"


export default () => {

    localStorage.removeItem('auth')
    const history = useHistory()

    useEffect(() => {
        return history.push('/login')
    },[])

    return (

        <>
            <span>Thank you.. <Route exact path ="/login">Login page</Route></span>
        </>
    )

}