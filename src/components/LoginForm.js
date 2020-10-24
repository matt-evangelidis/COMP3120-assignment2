import React, {useState} from 'react'
import loginService from '../services/login'
//import productService from '../services/products'

const LoginForm = ({user, userLoginHandler}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    console.log('the passed user value is:' , user)

    const handleLogin = async (event) => {
        event.preventDefault()
        user = await loginService.login({
          username, password,
        })
        window.localStorage.setItem(
          'loggedProductAppUser', JSON.stringify(user)
        ) 
        // productService.setToken(user.token)
        // userLoginHandler(user)
        // setUsername('')
        // setPassword('')
    }

    return (
        user === null
            ? <div>
                <strong> Please login </strong>
                <form onSubmit={handleLogin}>
                    <div >
                    <span> Username: </span>
                        <input
                        type="text"
                        value={username}
                        name="Username"
                        onChange={({ target }) => 
                            setUsername(target.value)
                        }
                    />
                    </div>
                    <div >
                    <span> Password: </span>
                        <input
                        type="password"
                        value={password}
                        name="Password"
                        onChange={({ target }) => 
                            setPassword(target.value)
                        }
                    />
                    </div>
                    <button type="submit">
                        Login
                    </button>
                </form>
        </div>
        : null
    )
}

export default LoginForm
