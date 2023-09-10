import React, { useState } from 'react';
// import $ from "jquery";

function Login() {
    const[username, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[result, setResult] = useState('');

    const showLoginForm = () =>{
        console.log('Show Login')
        document.getElementById('login-form-container').classList.remove('d-none');
        document.getElementById('register-form-container').classList.add('d-none');
    }
    
    const showRegisterForm = () => {
        console.log('Show Register')
        document.getElementById('register-form-container').classList.remove('d-none');
        document.getElementById('login-form-container').classList.add('d-none');
    }

    let handleLoginSubmit = async (e) => {

    }

    let handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        if(formData.get('password') !== formData.get('confirmPassword')){
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/PHP/auth.php", {
                method: "POST", 
                body:formData,
            });

            console.log(response)

            if(response.ok){
                const responseData = await response.json(); // Get response data as text
                alert(responseData.message); //from auth.php
                setResult('Registration successful');
            } else {
                setResult("Registration failed");
            }

        }catch (error) {
            console.error('Catch Error: ', error)
            setResult("An error occurred")
        }

    }


    let handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    let handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    let handlePasswordChange = (e) => {
        //set a debounce as explained here: https://www.developerway.com/posts/debouncing-in-react
        setPassword(e.target.value);
    }

    let handleConfirm =(e) => {
        setConfirmPassword(e.target.value)
    }
    
    return (
    <>
        <h1 className='center-text'>Login Page</h1>
        <div className="container" style={{paddingTop: '50px'}}>
            <div className='col-4  offset-4 button-group border-bottom'>
                <button onClick= {showLoginForm} className='btn btn-primary'>Login</button>
                <button onClick={showRegisterForm} className='btn btn-secondary'>Register</button>
            </div>
            <div className='col-4 offset-4' id='login-form-container'>
                <form action="http://localhost:8080/auth.php" 
                method="post"
                onSubmit={handleLoginSubmit}>
                    <h2>Login</h2>
                    <p>
                        <input onChange={handleUsernameChange} name="username" type="text" placeholder='Username' />
                    </p>
                    <p>
                        <input onChange={handlePasswordChange} name='password' type="password" placeholder='Password' />
                    </p>
                    <p>
                        <input name='submit' className='btn btn-success' type="submit" value='Enter the inn' />
                    </p>
                </form>
            </div>

            
            <div className='d-none col-4 offset-4' id='register-form-container'>
                <form 
                action="http://localhost:8080/auth.php"
                method='post'
                onSubmit={handleRegisterSubmit}>
                    <h2>Register</h2>
                    <p>
                        <input onChange={handleEmailChange} name="email" type="email" placeholder='Email' />
                    </p>
                    <p>
                        <input onChange={handleUsernameChange} name="username" type="text" placeholder='Username' />
                    </p>
                    <p>
                        <input onChange={handlePasswordChange} name="password" type="password" placeholder='Password' />
                    </p>
                    <p>
                        <input id="confirm-password" onKeyDown={handleConfirm} name="confirmPassword" type="password" placeholder='Confirm Password' />
                    </p>
                    <p>
                        <input className='btn btn-success' type="submit" value='Join the party' />
                    </p>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login;