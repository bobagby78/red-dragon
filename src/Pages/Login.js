import React from 'react'

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

function Login() {
  return (
    <>
       <h1 className='center-text'>Login Page</h1>
        <div className="container" style={{paddingTop: '50px'}}>
            <div className='col-4  offset-4 button-group border-bottom'>
                <button onClick= {showLoginForm} className='btn btn-primary'>Login</button>
                <button onClick={showRegisterForm} className='btn btn-secondary'>Register</button>
            </div>
           <div className='col-4 offset-4' id='login-form-container'>
                <form action="">
                    <br />
                    <p>
                        <input type="text" value='Username' />
                    </p>
                    <p>
                        <input type="text" value='Password' />
                    </p>
                    <p>
                        <input className='btn btn-success' type="submit" value='Enter the inn' />
                    </p>
                </form>
           </div>
           <div className='d-none col-4 offset-4' id='register-form-container'>
                <form action="">
                    <br />
                    <p>
                        <input type="text" value='Email' />
                    </p>
                    <p>
                        <input type="text" value='Username' />
                    </p>
                    <p>
                        <input type="text" value='Password' />
                    </p>
                    <p>
                        <input type="text" value='Confirm Password' />
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